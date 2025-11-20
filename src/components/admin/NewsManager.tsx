/** biome-ignore-all lint/a11y/noLabelWithoutControl: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
/** biome-ignore-all lint/a11y/useButtonType: <explanation> */
/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <explanation> */

import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import FormInput from "../ui/formInput";
import FormTextArea from "../ui/formTextArea";

interface News {
	id: string;
	title: string;
	content: string;
	img: string;
	imgurDeleteHash?: string;
	keywords: string[];
	publishedDate?: string;
	isFeatured?: boolean;
	createdAt: string;
	updatedAt: string;
	userId: string;
	user?: {
		id: string;
		email: string;
	};
}

export default function NewsManager() {
	const [news, setNews] = useState<News[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [newNews, setNewNews] = useState({
		title: "",
		content: "",
		img: "",
		keywords: [] as string[],
		publishedDate: "",
	});
	const [editingNews, setEditingNews] = useState<News | null>(null);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		fetchNews();
	}, []);

	const fetchNews = async () => {
		setIsLoading(true);
		try {
			const response = await api.get("/news");
			setNews(response.data.data);
		} catch (error) {
			console.error("Erro ao carregar notícias:", error);
			setNews([]);
		} finally {
			setIsLoading(false);
		}
	};

	const handleKeywordAdd = (keyword: string) => {
		if (keyword.trim() && !newNews.keywords.includes(keyword.trim())) {
			setNewNews((prev) => ({
				...prev,
				keywords: [...prev.keywords, keyword.trim()],
			}));
		}
	};

	const handleKeywordRemove = (index: number) => {
		setNewNews((prev) => ({
			...prev,
			keywords: prev.keywords.filter((_, i) => i !== index),
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const payload = {
				title: newNews.title,
				content: newNews.content,
				keywords: JSON.stringify(newNews.keywords),
				publishedDate: newNews.publishedDate || new Date().toISOString(),
				img: newNews.img || "",
			};

			if (editingNews) {
				await api.patch(`/news/${editingNews.id}`, payload);
			} else {
				await api.post("/news", payload);
			}
			await fetchNews();
			setNewNews({
				title: "",
				content: "",
				img: "",
				keywords: [],
				publishedDate: "",
			});
			setEditingNews(null);
		} catch (error) {
			console.error("Erro ao salvar notícia:", error);
		} finally {
			setIsLoading(false);
		}
	};

	const handleEdit = (newsItem: News) => {
		setEditingNews(newsItem);
		setNewNews({
			title: newsItem.title,
			content: newsItem.content,
			img: newsItem.img || "",
			keywords: newsItem.keywords || [],
			publishedDate: newsItem.publishedDate
				? new Date(newsItem.publishedDate).toISOString().split("T")[0]
				: "",
		});
	};

	const handleDelete = async (id: string) => {
		if (window.confirm("Tem certeza que deseja excluir esta notícia?")) {
			setIsLoading(true);
			try {
				await api.delete(`/news/${id}`);
				await fetchNews();
			} catch (error) {
				console.error("Erro ao excluir notícia:", error);
			} finally {
				setIsLoading(false);
			}
		}
	};

	const handleToggleFeatured = async (id: string, currentFeatured: boolean) => {
		setIsLoading(true);
		try {
			await api.patch(`/news/${id}`, { isFeatured: !currentFeatured });
			await fetchNews();
		} catch (error) {
			console.error("Erro ao atualizar destaque da notícia:", error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="p-6">
			<h2 className="text-2xl font-bold mb-6">Gerenciar Notícias</h2>

			<form
				onSubmit={handleSubmit}
				className="mb-8 bg-white p-6 rounded-lg shadow"
			>
				<h3 className="text-lg font-semibold mb-4">
					{editingNews ? "Editar Notícia" : "Adicionar Nova Notícia"}
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="md:col-span-2">
						<FormInput
							label="Título"
							value={newNews.title}
							onChange={(value) => setNewNews({ ...newNews, title: value })}
							required
							placeholder="Digite o título da notícia"
						/>
					</div>
					<div className="md:col-span-2">
						<FormTextArea
							label="Conteúdo"
							value={newNews.content}
							onChange={(value) => setNewNews({ ...newNews, content: value })}
							required
							rows={6}
						/>
					</div>
					<div className="md:col-span-2">
						<label className="block text-sm font-medium text-gray-700 mb-2">
							Palavras-chave
						</label>
						<div className="space-y-3">
							<div className="flex gap-2">
								<input
									type="text"
									placeholder="Adicionar palavra-chave..."
									className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
									onKeyPress={(e) => {
										if (e.key === "Enter") {
											e.preventDefault();
											const input = e.target as HTMLInputElement;
											handleKeywordAdd(input.value);
											input.value = "";
										}
									}}
								/>
								<button
									type="button"
									onClick={(e) => {
										const input = e.currentTarget
											.previousElementSibling as HTMLInputElement;
										handleKeywordAdd(input.value);
										input.value = "";
									}}
									className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
								>
									Adicionar
								</button>
							</div>
							{newNews.keywords.length > 0 && (
								<div className="flex flex-wrap gap-2">
									{newNews.keywords.map((keyword, index) => (
										<span
											key={index}
											className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-indigo-100 text-indigo-800"
										>
											{keyword}
											<button
												type="button"
												onClick={() => handleKeywordRemove(index)}
												className="ml-2 text-indigo-600 hover:text-indigo-800"
											>
												<svg
													className="w-4 h-4"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="M6 18L18 6M6 6l12 12"
													/>
												</svg>
											</button>
										</span>
									))}
								</div>
							)}
						</div>
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-2">
							Data da Notícia
						</label>
						<input
							type="date"
							value={newNews.publishedDate}
							onChange={(e) =>
								setNewNews({ ...newNews, publishedDate: e.target.value })
							}
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
						/>
					</div>
					<FormInput
						label="URL da Imagem"
						value={newNews.img}
						onChange={(value) => setNewNews({ ...newNews, img: value })}
						placeholder="https://exemplo.com/imagem.jpg"
					/>
				</div>
				<div className="mt-4">
					<button
						type="submit"
						className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						{editingNews ? "Atualizar" : "Adicionar"}
					</button>
					{editingNews && (
						<button
							type="button"
							onClick={() => {
								setEditingNews(null);
								setNewNews({
									title: "",
									content: "",
									img: "",
									keywords: [],
									publishedDate: "",
								});
							}}
							className="ml-3 inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							Cancelar
						</button>
					)}
				</div>
			</form>

			<div
				className={`bg-white shadow rounded-lg transition-all duration-300 ${isLoading ? "opacity-50 blur-sm" : ""}`}
			>
				<table className="min-w-full divide-y divide-gray-200 rounded-lg">
					<thead className="bg-gray-50">
						<tr>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								Notícia
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								Autor
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
								Data
							</th>
							<th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
								Destaque
							</th>
							<th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
								Ações
							</th>
						</tr>
					</thead>
					<tbody className="bg-white divide-y divide-gray-200">
						{news.map((newsItem) => (
							<tr key={newsItem.id}>
								<td className="px-6 py-4">
									<div className="flex items-center">
										<div className="h-10 w-10 flex-shrink-0">
											<img
												className="h-10 w-10 rounded-full object-cover"
												src={newsItem.img}
												alt={newsItem.title}
											/>
										</div>
										<div className="ml-4 flex-1">
											<div className="flex items-center gap-2">
												<div className="text-sm font-medium text-gray-900">
													{newsItem.title}
												</div>
												{newsItem.isFeatured && (
													<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
														Destaque
													</span>
												)}
											</div>
											<div className="text-sm text-gray-500 line-clamp-2">
												{newsItem.content}
											</div>
										</div>
									</div>
								</td>
								<td className="px-6 py-4 whitespace-nowrap">
									<div className="text-sm text-gray-900">
										{newsItem.user?.email || "Desconhecido"}
									</div>
								</td>
								<td className="px-6 py-4 whitespace-nowrap">
									<div className="text-sm text-gray-900">
										{newsItem.publishedDate
											? new Date(newsItem.publishedDate).toLocaleDateString(
													"pt-BR",
												)
											: new Date(newsItem.createdAt).toLocaleDateString(
													"pt-BR",
												)}
									</div>
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-center">
									<button
										type="button"
										onClick={() =>
											handleToggleFeatured(
												newsItem.id,
												newsItem.isFeatured || false,
											)
										}
										className={`inline-flex items-center justify-center p-2 rounded-full transition-colors ${
											newsItem.isFeatured
												? "text-yellow-500 hover:text-yellow-600 bg-yellow-50"
												: "text-gray-400 hover:text-yellow-500 hover:bg-yellow-50"
										}`}
										title={
											newsItem.isFeatured
												? "Remover do destaque"
												: "Marcar como destaque"
										}
									>
										<Star
											className={`w-5 h-5 ${
												newsItem.isFeatured ? "fill-current" : ""
											}`}
										/>
									</button>
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
									<button
										type="button"
										onClick={() => handleEdit(newsItem)}
										className="text-indigo-600 hover:text-indigo-900 mr-4"
									>
										Editar
									</button>
									<button
										type="button"
										onClick={() => handleDelete(newsItem.id)}
										className="text-red-600 hover:text-red-900"
									>
										Excluir
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

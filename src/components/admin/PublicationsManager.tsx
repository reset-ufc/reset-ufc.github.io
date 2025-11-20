/** biome-ignore-all lint/correctness/useExhaustiveDependencies: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
/** biome-ignore-all lint/a11y/useButtonType: <explanation> */

import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import FormInput from "../ui/formInput";
import FormSelect from "../ui/formSelect";
import FormTextArea from "../ui/formTextArea";
import TagList from "../ui/tagList";

interface Publication {
	id: string;
	title: string;
	description: string;
	category: string;
	journalName: string;
	year: number;
	authors: string[];
	keywords: string[];
	url: string;
	isFeatured?: boolean;
}

export default function PublicationsManager() {
	const [publications, setPublications] = useState<Publication[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [newPublication, setNewPublication] = useState({
		title: "",
		description: "",
		category: "",
		journalName: "",
		year: 0,
		authors: [] as string[],
		keywords: [] as string[],
		url: "",
	});
	const [editingPublication, setEditingPublication] =
		useState<Publication | null>(null);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [limit] = useState(3);

	useEffect(() => {
		fetchPublications(page, limit);
	}, [page, limit]);

	const fetchPublications = async (page = 1, limit = 3) => {
		setIsLoading(true);
		try {
			const response = await api.get(
				`/publications?page=${page}&limit=${limit}`,
			);
			setPublications(response.data.data);
			setTotalPages(response.data.totalPages);
		} catch (error) {
			console.error("Erro ao carregar publicações:", error);
			setPublications([]);
			setTotalPages(1);
		} finally {
			setIsLoading(false);
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			if (editingPublication) {
				await api.patch(
					`/publications/${editingPublication.id}`,
					newPublication,
				);
			} else {
				await api.post("/publications", newPublication);
			}
			await fetchPublications();
			setNewPublication({
				title: "",
				description: "",
				category: "",
				journalName: "",
				year: 0,
				authors: [],
				keywords: [],
				url: "",
			});
			setEditingPublication(null);
		} catch (error) {
			console.error("Erro ao salvar publicação:", error);
		} finally {
			setIsLoading(false);
		}
	};

	const handleEdit = (publication: Publication) => {
		setEditingPublication(publication);
		setNewPublication({
			title: publication.title,
			description: publication.description,
			category: publication.category,
			journalName: publication.journalName,
			year: publication.year,
			authors: publication.authors,
			keywords: publication.keywords,
			url: publication.url,
		});
	};

	const handleDelete = async (id: string) => {
		if (window.confirm("Tem certeza que deseja excluir esta publicação?")) {
			setIsLoading(true);
			try {
				await api.delete(`/publications/${id}`);
				await fetchPublications();
			} catch (error) {
				console.error("Erro ao excluir publicação:", error);
			} finally {
				setIsLoading(false);
			}
		}
	};

	const handleAddAuthor = (author: string) => {
		setNewPublication((prev) => ({
			...prev,
			authors: [...prev.authors, author],
		}));
	};

	const handleRemoveAuthor = (index: number) => {
		setNewPublication((prev) => ({
			...prev,
			authors: prev.authors.filter((_, i) => i !== index),
		}));
	};

	const handleAddKeyword = (keyword: string) => {
		setNewPublication((prev) => ({
			...prev,
			keywords: [...prev.keywords, keyword],
		}));
	};

	const handleRemoveKeyword = (index: number) => {
		setNewPublication((prev) => ({
			...prev,
			keywords: prev.keywords.filter((_, i) => i !== index),
		}));
	};

	const handleToggleFeatured = async (id: string, currentFeatured: boolean) => {
		setIsLoading(true);
		try {
			await api.patch(`/publications/${id}`, { isFeatured: !currentFeatured });
			await fetchPublications(page, limit);
		} catch (error) {
			console.error("Erro ao atualizar destaque da publicação:", error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="p-6">
			<h2 className="text-2xl font-bold mb-6">Gerenciar Publicações</h2>

			<form
				onSubmit={handleSubmit}
				className="mb-8 bg-white p-6 rounded-lg shadow"
			>
				<h3 className="text-lg font-semibold mb-4">
					{editingPublication
						? "Editar Publicação"
						: "Adicionar Nova Publicação"}
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="md:col-span-2">
						<FormInput
							label="Título"
							value={newPublication.title}
							onChange={(value) =>
								setNewPublication({ ...newPublication, title: value })
							}
							required
						/>
					</div>
					<div className="md:col-span-2">
						<FormTextArea
							label="Descrição"
							value={newPublication.description}
							onChange={(value) =>
								setNewPublication({ ...newPublication, description: value })
							}
							required
						/>
					</div>
					<FormSelect
						label="Categoria"
						value={newPublication.category}
						onChange={(value) =>
							setNewPublication({ ...newPublication, category: value })
						}
						options={[
							{ value: "Livro", label: "Livro" },
							{ value: "Artigo de Revista", label: "Artigo de Revista" },
							{ value: "Artigo de Congresso", label: "Artigo de Congresso" },
						]}
						required
					/>
					<FormInput
						label="Nome do Veículo de Publicação"
						value={newPublication.journalName}
						onChange={(value) =>
							setNewPublication({ ...newPublication, journalName: value })
						}
						required
					/>
					<FormInput
						label="Ano"
						type="number"
						value={newPublication.year.toString()}
						onChange={(value) =>
							setNewPublication({ ...newPublication, year: Number(value) })
						}
						required
					/>
					<FormInput
						label="URL"
						value={newPublication.url}
						onChange={(value) =>
							setNewPublication({ ...newPublication, url: value })
						}
						required
					/>
					<TagList
						title="Autores"
						items={newPublication.authors}
						onAdd={handleAddAuthor}
						onRemove={handleRemoveAuthor}
						placeholder="Adicionar autor"
					/>
					<TagList
						title="Palavras-chave"
						items={newPublication.keywords}
						onAdd={handleAddKeyword}
						onRemove={handleRemoveKeyword}
						placeholder="Adicionar palavra-chave"
					/>
				</div>
				<div className="mt-4">
					<button
						type="submit"
						className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						{editingPublication ? "Atualizar" : "Adicionar"}
					</button>
					{editingPublication && (
						<button
							type="button"
							onClick={() => {
								setEditingPublication(null);
								setNewPublication({
									title: "",
									description: "",
									category: "",
									journalName: "",
									year: 0,
									authors: [],
									keywords: [],
									url: "",
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
				className={`transition-all duration-300 ${isLoading ? "opacity-50 blur-sm" : ""}`}
			>
				<div className="grid gap-6">
					{publications.map((publication) => (
						<div
							key={publication.id}
							className="bg-white shadow rounded-lg p-6 border"
						>
							<div className="flex justify-between items-start mb-4">
								<div className="flex-1">
									<div className="flex items-center gap-2 mb-2">
										<h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
											{publication.title}
										</h3>
										{publication.isFeatured && (
											<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
												Destaque
											</span>
										)}
									</div>
									<div className="flex flex-wrap gap-2 mb-3">
										<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
											{publication.category}
										</span>
										<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
											{publication.journalName}
										</span>
										<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
											{publication.year}
										</span>
									</div>
								</div>
								<div className="flex gap-2 ml-4 items-center">
									<button
										type="button"
										onClick={() =>
											handleToggleFeatured(
												publication.id,
												publication.isFeatured || false,
											)
										}
										className={`inline-flex items-center justify-center p-2 rounded-full transition-colors ${
											publication.isFeatured
												? "text-yellow-500 hover:text-yellow-600 bg-yellow-50"
												: "text-gray-400 hover:text-yellow-500 hover:bg-yellow-50"
										}`}
										title={
											publication.isFeatured
												? "Remover do destaque"
												: "Marcar como destaque"
										}
									>
										<Star
											className={`w-5 h-5 ${
												publication.isFeatured ? "fill-current" : ""
											}`}
										/>
									</button>
									<button
										type="button"
										onClick={() => handleEdit(publication)}
										className="text-indigo-600 hover:text-indigo-900 text-sm font-medium"
									>
										Editar
									</button>
									<button
										type="button"
										onClick={() => handleDelete(publication.id)}
										className="text-red-600 hover:text-red-900 text-sm font-medium"
									>
										Excluir
									</button>
								</div>
							</div>

							<p className="text-gray-700 text-sm mb-4 line-clamp-3">
								{publication.description}
							</p>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<h4 className="text-sm font-medium text-gray-900 mb-1">
										Autores:
									</h4>
									<div className="flex flex-wrap gap-1">
										{publication.authors.map((author, idx) => (
											<span
												key={idx}
												className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-700"
											>
												{author}
											</span>
										))}
									</div>
								</div>

								<div>
									<h4 className="text-sm font-medium text-gray-900 mb-1">
										Palavras-chave:
									</h4>
									<div className="flex flex-wrap gap-1">
										{publication.keywords.map((keyword, idx) => (
											<span
												key={idx}
												className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-700"
											>
												{keyword}
											</span>
										))}
									</div>
								</div>
							</div>

							<div className="mt-4 pt-4 border-t border-gray-200">
								<a
									href={publication.url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-indigo-600 hover:text-indigo-900 text-sm font-medium"
								>
									Ver publicação →
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
			{/* Paginação */}
			<div className="flex justify-center items-center mt-4 gap-2">
				<button
					className="px-3 py-1 rounded bg-indigo-600 text-white disabled:bg-gray-300"
					onClick={() => setPage((p) => Math.max(1, p - 1))}
					disabled={page === 1}
				>
					Anterior
				</button>
				<span className="mx-2">
					Página {page} de {totalPages}
				</span>
				<button
					className="px-3 py-1 rounded bg-indigo-600 text-white disabled:bg-gray-300"
					onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
					disabled={page === totalPages}
				>
					Próxima
				</button>
			</div>
		</div>
	);
}

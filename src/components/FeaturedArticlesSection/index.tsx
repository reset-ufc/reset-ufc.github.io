import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
import { useFeaturedPublications } from "../../hooks/useFeaturedContent";
import SectionTitle from "../SectionTitle";

export function FeaturedArticles() {
	const { data, isLoading, isError } = useFeaturedPublications(6);

	const settingsSlide = {
		dots: false,
		infinite: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	if (isLoading) {
		return (
			<div className="p-6 md:p-10 lg:p-14 mx-auto max-w-7xl rounded-md">
				<div className="mb-6">
					<SectionTitle
						title="Artigos em destaque"
						description="Confira os artigos mais recentes e relevantes da nossa equipe"
					/>
				</div>
				<div className="flex justify-center items-center py-20">
					<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
				</div>
			</div>
		);
	}

	if (isError || !data || data.data.length === 0) {
		return (
			<div className="p-6 md:p-10 lg:p-14 mx-auto max-w-7xl rounded-md">
				<div className="mb-6">
					<SectionTitle
						title="Artigos em destaque"
						description="Confira os artigos mais recentes e relevantes da nossa equipe"
					/>
				</div>
				<div className="flex justify-center items-center py-20">
					<p className="text-white text-lg">
						Nenhum artigo em destaque disponível no momento.
					</p>
				</div>
			</div>
		);
	}

	const articles = data.data;
	const shouldUseSlider = articles.length > 4;

	const ArticleCard = ({ item }: { item: (typeof articles)[0] }) => (
		<div className="p-6 md:p-4">
			<div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
				<div className="p-6">
					<span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-600 bg-indigo-100 rounded-full mb-4">
						{item.category}
					</span>
					<h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
						{item.title}
					</h3>
					<p className="text-sm text-gray-600 mb-1 line-clamp-1">
						{item.journalName}
					</p>
					<p className="text-sm text-gray-600 mb-1">Ano: {item.year}</p>
					<p className="text-sm text-gray-600 mb-4 line-clamp-1">
						<span className="font-semibold">Autores</span>:{" "}
						{item.authors.join(", ")}
					</p>
					{item.keywords && item.keywords.length > 0 && (
						<p className="text-sm text-gray-600 mb-4 line-clamp-1">
							<span className="font-semibold">Palavras chaves:</span>{" "}
							{item.keywords.join(", ")}
						</p>
					)}
					<p className="text-gray-700 mb-4 line-clamp-2">{item.description}</p>
					<NavLink
						to={item.url}
						target="_blank"
						className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors duration-300"
					>
						Leia mais
					</NavLink>
				</div>
			</div>
		</div>
	);

	return (
		<div className="p-6 md:p-10 lg:p-14 mx-auto max-w-7xl rounded-md">
			<div className="mb-6">
				<SectionTitle
					title="Artigos em destaque"
					description="Confira os artigos mais recentes e relevantes da nossa equipe"
				/>
			</div>
			{shouldUseSlider ? (
				<div className="relative px-4">
					<Slider {...settingsSlide}>
						{articles.map((item) => (
							<ArticleCard key={item.id} item={item} />
						))}
					</Slider>
				</div>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
					{articles.map((item) => (
						<ArticleCard key={item.id} item={item} />
					))}
				</div>
			)}
		</div>
	);
}

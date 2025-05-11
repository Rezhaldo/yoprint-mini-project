// Utils
export interface AnimeDTO {
	// biome-ignore lint/style/useNamingConvention: <api response>
	mal_id: number;
	url: string;
	images: {
		jpg: {
			// biome-ignore lint/style/useNamingConvention: <api response>
			image_url: string;
			// biome-ignore lint/style/useNamingConvention: <api response>
			small_image_url: string;
			// biome-ignore lint/style/useNamingConvention: <api response>
			large_image_url: string;
		};
		webp: {
			// biome-ignore lint/style/useNamingConvention: <api response>
			image_url: string;
			// biome-ignore lint/style/useNamingConvention: <api response>
			small_image_url: string;
			// biome-ignore lint/style/useNamingConvention: <api response>
			large_image_url: string;
		};
	};
	title: string;
	// biome-ignore lint/style/useNamingConvention: <api response>
	title_english: string | null;
	// biome-ignore lint/style/useNamingConvention: <api response>
	title_japanese: string | null;
	synopsis: string | null;
	episodes: number | null;
	score: number | null;
	status: string;
	year: number | null;
}

export class Anime {
	id: number;
	title: string;
	image: string;
	score: number | null;
	status: string;
	episodes: number | null;
	year: number | null;
	synopsis: string | null;

	constructor(dto: AnimeDTO) {
		this.id = dto.mal_id;
		this.title = dto.title;
		this.image = dto.images.jpg.image_url; // or .webp.image_url if preferred
		this.score = dto.score;
		this.status = dto.status;
		this.episodes = dto.episodes;
		this.year = dto.year;
		this.synopsis = dto.synopsis;
	}
}

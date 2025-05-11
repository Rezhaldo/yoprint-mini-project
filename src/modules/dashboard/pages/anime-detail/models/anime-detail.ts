export interface AnimeDetailDTO {
	// biome-ignore lint/style/useNamingConvention: <api response>
	mal_id: number;
	url: string;
	images: {
		jpg: ImageFormat;
		webp: ImageFormat;
	};
	trailer: {
		// biome-ignore lint/style/useNamingConvention: <api response>
		youtube_id: string;
		url: string;
		// biome-ignore lint/style/useNamingConvention: <api response>
		embed_url: string;
	};
	approved: boolean;
	titles: Title[];
	title: string;
	// biome-ignore lint/style/useNamingConvention: <api response>
	title_english: string;
	// biome-ignore lint/style/useNamingConvention: <api response>
	title_japanese: string;
	// biome-ignore lint/style/useNamingConvention: <api response>
	title_synonyms: string[];
	type: string;
	source: string;
	episodes: number;
	status: string;
	airing: boolean;
	aired: Aired;
	duration: string;
	rating: string;
	score: number;
	// biome-ignore lint/style/useNamingConvention: <api response>
	scored_by: number;
	rank: number;
	popularity: number;
	members: number;
	favorites: number;
	synopsis: string;
	background: string;
	season: string;
	year: number;
	broadcast: Broadcast;
	producers: StudioInfo[];
	licensors: StudioInfo[];
	studios: StudioInfo[];
	genres: StudioInfo[];
	// biome-ignore lint/style/useNamingConvention: <api response>
	explicit_genres: StudioInfo[];
	themes: StudioInfo[];
	demographics: StudioInfo[];
	relations: Relation[];
	theme: {
		openings: string[];
		endings: string[];
	};
	external: ExternalLink[];
	streaming: ExternalLink[];
}

interface ImageFormat {
	// biome-ignore lint/style/useNamingConvention: <api response>
	image_url: string;
	// biome-ignore lint/style/useNamingConvention: <api response>
	small_image_url: string;
	// biome-ignore lint/style/useNamingConvention: <api response>
	large_image_url: string;
}

interface Title {
	type: string;
	title: string;
}

interface Aired {
	from: string;
	to: string;
	prop: {
		from: DateParts;
		to: DateParts;
		string: string;
	};
}

interface DateParts {
	day: number;
	month: number;
	year: number;
}

interface Broadcast {
	day: string;
	time: string;
	timezone: string;
	string: string;
}

interface StudioInfo {
	// biome-ignore lint/style/useNamingConvention: <api response>
	mal_id: number;
	type: string;
	name: string;
	url: string;
}

interface Relation {
	relation: string;
	entry: {
		// biome-ignore lint/style/useNamingConvention: <api response>
		mal_id: number;
		type: string;
		name: string;
		url: string;
	}[];
}

interface ExternalLink {
	name: string;
	url: string;
}

export class AnimeDetail {
	id: number;
	title: string;
	image: string;
	synopsis: string;
	rating: string;
	score: number;
	episodes: number;
	status: string;
	year: number;
	season: string;
	type: string;
	titleJapanese: string;
	titleEnglish: string;
	trailerUrl?: string;
	genres: string[];
	popularity: string;
	rank: string;
	favorites: string;

	constructor(dto: AnimeDetailDTO) {
		this.id = dto.mal_id;
		this.title = dto.title;
		this.image = dto.images.jpg.large_image_url;
		this.synopsis = dto.synopsis;
		this.rating = dto.rating;
		this.score = dto.score;
		this.episodes = dto.episodes;
		this.status = dto.status;
		this.year = dto.year;
		this.season = dto.season;
		this.type = dto.type;
		this.titleJapanese = dto.title_japanese;
		this.titleEnglish = dto.title_english;
		this.trailerUrl = dto.trailer?.embed_url || '';
		this.genres = dto.genres.map((g) => g.name);
		this.popularity = dto.popularity.toString();
		this.rank = dto.rank.toString();
		this.favorites = dto.favorites.toString();
	}
}

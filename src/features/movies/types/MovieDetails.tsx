import { Movie } from './Movie';

export type Genre = {
  id: number;
  name: string;
};

export type ProductionCompany = {
  name: string;
  id: number;
  logo_path: string | null;
  origin_country: string;
};

export type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

export type SpokenLanguage = {
  iso_6319_1: string;
  name: string;
};

export type MovieDetails = Movie & {
  belongs_to_collection: null | object;
  budget: number;
  genres: Genre[];
  homepage: string | null;
  imdb_id: string | null;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  revenue: number;
  runtime: number | null;
  spoken_languages: SpokenLanguage[];
  status: 'Rumored' | 'Planned' | 'In Production' | 'Post Production' | 'Released' | 'Canceled';
  tagline: string | null;
  video: boolean;
};

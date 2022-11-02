import { Movie } from './Movie';

export type PaginatedMovies = {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
};

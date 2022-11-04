import { Movie } from './Movie';
import { PaginatedMovies } from './PaginatedMovies';

export type RatedMovie = Movie & {
  rating: number;
};

export type PaginatedRatedMovies = {
  page: number;
  results: RatedMovie[];
  total_results: number;
  total_pages: number;
};

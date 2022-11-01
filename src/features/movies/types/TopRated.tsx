import { Movie } from './Movie';

export type TopRated = {
  page?: number;
  results?: Movie[];
  total_results?: number;
  total_pages?: number;
};

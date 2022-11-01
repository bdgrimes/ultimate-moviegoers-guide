import { Movie } from './Movie';

export type Popular = {
  page?: number;
  results?: Movie[];
  total_results?: number;
  total_pages?: number;
};

import { Dates } from './Dates';
import { Movie } from './Movie';

export type NowPlaying = {
  page?: number;
  results?: Movie[];
  dates?: Dates;
  total_pages?: number;
  total_results?: number;
};

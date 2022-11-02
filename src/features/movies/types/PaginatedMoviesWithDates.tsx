import { PaginatedMovies } from './PaginatedMovies';
import { Dates } from './Dates';

export type PaginatedMoviesWithDates = PaginatedMovies & {
  dates?: Dates;
};

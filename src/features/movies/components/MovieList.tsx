import { PaginatedMovies, PaginatedMoviesWithDates } from '../types';
import { Grid } from '@mantine/core';
import { MovieCard } from './MovieCard';

interface Props {
  paginatedMovies: PaginatedMovies[] | PaginatedMoviesWithDates[];
}

export const MovieList = ({ paginatedMovies }: Props) => {
  return (
    <Grid m="md">
      {paginatedMovies.map((paginatedMovie) =>
        paginatedMovie?.results?.map((movie) => (
          <Grid.Col key={movie.id} lg={2} md={4} sm={6}>
            <MovieCard movie={movie} />
          </Grid.Col>
        ))
      )}
    </Grid>
  );
};

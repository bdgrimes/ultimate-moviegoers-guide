import { Movie } from '../types';
import { Grid } from '@mantine/core';
import { MovieCard } from './MovieCard';

interface Props {
  movies: Movie[];
}

export const MovieList = ({ movies }: Props) => {
  return (
    <Grid m="md">
      {movies?.map((movie) => (
        <Grid.Col key={movie.id} lg={2} md={6} sm={6}>
          <MovieCard movie={movie} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

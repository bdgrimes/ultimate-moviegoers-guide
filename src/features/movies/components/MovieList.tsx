import { Movie } from '../types';
import { Grid } from '@mantine/core';

interface Props {
  movies: Movie[];
}

export const MovieList = ({ movies }: Props) => {
  return (
    <Grid>
      {movies?.map((movie) => (
        <Grid.Col key={movie.id} span={4}>
          {movie.title}
        </Grid.Col>
      ))}
    </Grid>
  );
};

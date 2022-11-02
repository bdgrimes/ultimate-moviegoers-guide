import { Movie } from '../types';
import { Grid } from '@mantine/core';
import { MovieCard } from './MovieCard';

interface Props {
  movies: Movie[];
}

export const MovieList = ({ movies }: Props) => {
  return (
    <Grid>
      {movies?.map((movie) => (
        <Grid.Col key={movie.id} lg={2} md={6} sm={6}>
          <MovieCard
            posterPath={movie.poster_path}
            title={movie.title}
            voteAverage={movie.vote_average}
          />
        </Grid.Col>
      ))}
    </Grid>
  );
};

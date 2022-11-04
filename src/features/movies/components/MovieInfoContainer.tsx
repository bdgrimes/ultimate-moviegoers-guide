import { Container, Group, Title, Text } from '@mantine/core';
import { MovieRating } from './MovieRating';
import { MovieDetails } from '../types';
import { formatGenresAsString, getReleaseYearFromReleaseDate } from '../utils/formatting';
import { PersonalMovieRating } from './PersonalMovieRating';

interface Props {
  movieDetails: MovieDetails;
}

export const MovieInfoContainer = ({ movieDetails }: Props) => {
  const genres = formatGenresAsString(movieDetails.genres);
  const releaseYear = getReleaseYearFromReleaseDate(movieDetails.release_date);

  return (
    <Container
      sx={{
        background: 'rgba(255, 255, 255, 0.4)',
        borderRadius: '16px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(5px)',
        padding: '15px',
      }}
    >
      <Group>
        <Title weight="400" order={1} mb={5}>
          {movieDetails.title} {releaseYear}
        </Title>
        <Text weight="200">{genres}</Text>
        <MovieRating rating={movieDetails.vote_average} />
      </Group>
      <Text weight="300" italic mb={5}>
        {movieDetails.tagline}
      </Text>
      <Text weight="300" mb={10}>
        {movieDetails.overview}
      </Text>
      <Text weight="300">Runtime {movieDetails.runtime} minutes</Text>
      <Group position="right">
        <Text weight="300">Rate the Movie:</Text>
        <PersonalMovieRating movieId={movieDetails.id} />
      </Group>
    </Container>
  );
};

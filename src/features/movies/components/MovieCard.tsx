import { Card, Group, Image, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import { Movie } from '../types';
import { MovieRating } from './MovieRating';

interface Props {
  movie: Movie;
}

export const MovieCard = ({ movie }: Props) => {
  const { id, poster_path, title, vote_average } = movie;

  return (
    <Card shadow="md" radius="md" p="md">
      <Card.Section component={Link} to={`/movies/${id}`}>
        {poster_path && (
          <Image
            radius="sm"
            src={`https://image.tmdb.org/t/p/w440_and_h660_face/${poster_path}`}
            alt={title}
            withPlaceholder
          />
        )}
      </Card.Section>
      <Text size="md" weight="semibold" align="center" pb={3}>
        {title}
      </Text>
      <Group position="center">
        <MovieRating vote_average={vote_average} />
      </Group>
    </Card>
  );
};

import { useParams } from 'react-router-dom';
import { Container, Center, Grid, Group, Image, Text, Title } from '@mantine/core';
import { useDetails } from '../api/getDetails';
import { CenteredLoader } from '../../../components/Elements/CenteredLoader';
import { MovieRating } from '../components/MovieRating';

export const Movie = () => {
  let { movieId } = useParams();
  const movieDetailsQuery = useDetails(+movieId!);
  const genres = movieDetailsQuery?.data?.genres?.map((genre) => `${genre.name}`).join('/');

  if (movieDetailsQuery.isLoading) return <CenteredLoader />;

  if (!movieDetailsQuery?.data)
    return (
      <Center style={{ width: '100%', height: '100%' }}>
        <Text weight="bold">Movie not found!</Text>
      </Center>
    );

  return (
    <Grid mx={20}>
      <Grid.Col sm={3}>
        <Image
          radius="sm"
          src={`https://image.tmdb.org/t/p/w440_and_h660_face/${movieDetailsQuery.data.poster_path}`}
          sx={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}
          alt={movieDetailsQuery.data.title || 'No Title Found'}
        />
      </Grid.Col>
      <Grid.Col xs={1} />
      <Grid.Col sm={6} mt={20}>
        <Container
          sx={(theme) => ({
            backgroundColor: theme.colors.gray[2],
          })}
        >
          <Group>
            <Title weight="400" order={1} mb={5}>
              {movieDetailsQuery.data.title}
            </Title>
            <Text weight="200">{genres}</Text>
            <MovieRating vote_average={movieDetailsQuery.data.vote_average} />
          </Group>
          <Text weight="200" italic mb={5}>
            {movieDetailsQuery.data.tagline}
          </Text>
          <Text weight="200">{movieDetailsQuery.data.overview}</Text>
        </Container>
      </Grid.Col>
    </Grid>
  );
};

import { useParams } from 'react-router-dom';
import { Box, Center, Grid, Image, Text, Title } from '@mantine/core';
import { useMovieDetails } from '../api/getMovieDetails';
import { CenteredLoader } from '../../../components/Elements/CenteredLoader';
import { MovieCreditsCarousel } from '../components/MovieCreditsCarousel';
import { MovieInfoContainer } from '../components/MovieInfoContainer';

export const MovieDetails = () => {
  let { movieId } = useParams();
  const movieDetailsQuery = useMovieDetails(+movieId!);

  if (movieDetailsQuery.isLoading) return <CenteredLoader />;

  if (!movieDetailsQuery?.data)
    return (
      <Center style={{ width: '100%', height: '100%' }}>
        <Text weight="bold">Movie not found!</Text>
      </Center>
    );

  return (
    <>
      <Box
        sx={{
          background: `linear-gradient(to top, #00000fba, #444444cc), url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movieDetailsQuery.data.backdrop_path}) no-repeat top center`,
          height: '54%',
          width: '100%',
          position: 'absolute',
          zIndex: -1,
          top: 0,
          left: 0,
        }}
      />
      <Grid justify="center">
        <Grid.Col xl={2} lg={2} md={4} sm={4} xs={12}>
          <Image
            radius="sm"
            src={`https://image.tmdb.org/t/p/w440_and_h660_face/${movieDetailsQuery.data.poster_path}`}
            sx={{
              boxShadow: 'rgba(200, 200, 200, 0.3) 0px 7px 29px 0px',
            }}
            alt={movieDetailsQuery.data.title}
            withPlaceholder
          />
        </Grid.Col>
        <Grid.Col sm={1} />
        <Grid.Col xl={5} lg={5} md={5} sm={5} xs={11} mt={20}>
          <MovieInfoContainer movieDetails={movieDetailsQuery.data} />
        </Grid.Col>
        <Grid.Col xs={11}>
          <Title order={3} weight={400}>
            Cast
          </Title>
          <MovieCreditsCarousel movieId={movieDetailsQuery.data.id} />
        </Grid.Col>
      </Grid>
    </>
  );
};

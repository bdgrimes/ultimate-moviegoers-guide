import { CenteredLoader } from '../../../components/Elements/CenteredLoader';
import { useNowPlaying } from '../api/getNowPlaying';
import { MovieList } from '../components/MovieList';
import { Button, Center, Title } from '@mantine/core';

export const NowPlaying = () => {
  const nowPlayingQuery = useNowPlaying();

  if (nowPlayingQuery.isLoading) {
    return <CenteredLoader />;
  }

  if (!nowPlayingQuery?.data?.pages) return null;

  return (
    <>
      <Center>
        <Title
          order={2}
          weight="400"
          variant="gradient"
          gradient={{ from: 'indigo', to: 'blue', deg: 45 }}
        >
          Now Playing
        </Title>
      </Center>
      <MovieList paginatedMovies={nowPlayingQuery.data.pages} />
      <Center>
        <Button onClick={() => nowPlayingQuery.fetchNextPage()}>Load More</Button>
      </Center>
    </>
  );
};

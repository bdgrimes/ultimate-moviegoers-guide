import { CenteredLoader } from '../../../components/Elements/CenteredLoader';
import { useNowPlaying } from '../api/getNowPlaying';
import { MovieList } from '../components/MovieList';
import { Button, Center } from '@mantine/core';

export const NowPlaying = () => {
  const nowPlayingQuery = useNowPlaying();

  if (nowPlayingQuery.isLoading) {
    return <CenteredLoader />;
  }

  if (!nowPlayingQuery?.data?.pages) return null;

  return (
    <>
      <MovieList paginatedMovies={nowPlayingQuery!.data!.pages} />
      <Center>
        <Button onClick={() => nowPlayingQuery.fetchNextPage()}>Load More</Button>
      </Center>
    </>
  );
};

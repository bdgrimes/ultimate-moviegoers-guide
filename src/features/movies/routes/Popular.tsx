import { CenteredLoader } from '../../../components/Elements/CenteredLoader';
import { usePopular } from '../api/getPopular';
import { MovieList } from '../components/MovieList';
import { Button, Center } from '@mantine/core';

export const Popular = () => {
  const popularQuery = usePopular();

  if (popularQuery.isLoading) {
    return <CenteredLoader />;
  }

  if (!popularQuery?.data?.pages) return null;

  return (
    <>
      <MovieList paginatedMovies={popularQuery.data.pages} />
      <Center>
        <Button onClick={() => popularQuery.fetchNextPage()}>Load More</Button>
      </Center>
    </>
  );
};

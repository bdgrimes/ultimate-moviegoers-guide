import { CenteredLoader } from '../../../components/Elements/CenteredLoader';
import { useTopRated } from '../api/getTopRated';
import { MovieList } from '../components/MovieList';
import { Button, Center } from '@mantine/core';

export const TopRated = () => {
  const topRatedQuery = useTopRated();

  if (topRatedQuery.isLoading) {
    return <CenteredLoader />;
  }

  if (!topRatedQuery?.data?.pages) return null;

  return (
    <>
      <MovieList paginatedMovies={topRatedQuery.data.pages} />
      <Center>
        <Button onClick={() => topRatedQuery.fetchNextPage()}>Load More</Button>
      </Center>
    </>
  );
};

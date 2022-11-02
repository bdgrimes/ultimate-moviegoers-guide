import { CenteredLoader } from '../../../components/Elements/CenteredLoader';
import { usePopular } from '../api/getPopular';
import { MovieList } from '../components/MovieList';
import { Button, Center, Title } from '@mantine/core';

export const Popular = () => {
  const popularQuery = usePopular();

  if (popularQuery.isLoading) {
    return <CenteredLoader />;
  }

  if (!popularQuery?.data?.pages) return null;

  return (
    <>
      <Center>
        <Title order={2} weight="400">
          Popular
        </Title>
      </Center>
      <MovieList paginatedMovies={popularQuery.data.pages} />
      <Center>
        <Button onClick={() => popularQuery.fetchNextPage()}>Load More</Button>
      </Center>
    </>
  );
};

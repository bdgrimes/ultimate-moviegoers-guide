import { CenteredLoader } from '../../../components/Elements/CenteredLoader';
import { useTopRated } from '../api/getTopRated';
import { MovieList } from '../components/MovieList';
import { Button, Center, Title } from '@mantine/core';

export const TopRated = () => {
  const topRatedQuery = useTopRated();

  if (topRatedQuery.isLoading) {
    return <CenteredLoader />;
  }

  if (!topRatedQuery?.data?.pages) {
    return (
      <Center>
        <Title order={1}>Failed to load movie data.</Title>
      </Center>
    );
  }

  return (
    <>
      <Center>
        <Title
          order={2}
          weight="400"
          variant="gradient"
          gradient={{ from: 'indigo', to: 'blue', deg: 45 }}
        >
          Top Rated
        </Title>
      </Center>
      <MovieList paginatedMovies={topRatedQuery.data.pages} />
      <Center>
        <Button disabled={!topRatedQuery.hasNextPage} onClick={() => topRatedQuery.fetchNextPage()}>
          Load More
        </Button>
      </Center>
    </>
  );
};

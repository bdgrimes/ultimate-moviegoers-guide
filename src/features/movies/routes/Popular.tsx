import { CenteredLoader } from '../../../components/Elements/CenteredLoader';
import { usePopular } from '../api/getPopular';
import { MovieList } from '../components/MovieList';
import { Button, Center, Title } from '@mantine/core';

export const Popular = () => {
  const popularQuery = usePopular();

  if (popularQuery.isLoading) {
    return <CenteredLoader />;
  }

  if (!popularQuery?.data?.pages) {
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
          Popular
        </Title>
      </Center>
      <MovieList paginatedMovies={popularQuery.data.pages} />
      <Center>
        <Button disabled={!popularQuery.hasNextPage} onClick={() => popularQuery.fetchNextPage()}>
          Load More
        </Button>
      </Center>
    </>
  );
};

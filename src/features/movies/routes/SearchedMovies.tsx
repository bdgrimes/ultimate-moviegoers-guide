import { CenteredLoader } from '../../../components/Elements/CenteredLoader';
import { MovieList } from '../components/MovieList';
import { Button, Center, Title } from '@mantine/core';
import { useInfiniteMovieSearch } from '../api/getMovieSearch';
import { useParams } from 'react-router';

export const SearchedMovies = () => {
  const { movieName } = useParams();
  const searchQuery = useInfiniteMovieSearch(movieName as string);

  if (searchQuery.isLoading) {
    return <CenteredLoader />;
  }

  if (!searchQuery?.data?.pages) {
    return (
      <Center>
        <Title order={1}>Failed to load movie data.</Title>
      </Center>
    );
  }

  return (
    <>
      <MovieList paginatedMovies={searchQuery.data.pages} />
      <Center>
        <Button disabled={!searchQuery.hasNextPage} onClick={() => searchQuery.fetchNextPage()}>
          Load More
        </Button>
      </Center>
    </>
  );
};

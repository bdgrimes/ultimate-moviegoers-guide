import { CenteredLoader } from '../../../components/Elements/CenteredLoader';
import { MovieList } from '../components/MovieList';
import { Button, Center, Title } from '@mantine/core';
import { useInfiniteRatedMovies } from '../api/getRatedMovies';
import { useGuestSession } from '../../auth/hooks/useGuestSession';

export const RatedMovies = () => {
  const guestSession = useGuestSession();
  const ratedMoviesQuery = useInfiniteRatedMovies(guestSession?.guest_session_id);

  if (ratedMoviesQuery.isLoading) {
    return <CenteredLoader />;
  }

  if (!ratedMoviesQuery?.data?.pages) {
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
          Movies You've Rated
        </Title>
      </Center>
      <MovieList paginatedMovies={ratedMoviesQuery.data.pages} />
      <Center>
        <Button
          disabled={!ratedMoviesQuery.hasNextPage}
          onClick={() => ratedMoviesQuery.fetchNextPage()}
        >
          Load More
        </Button>
      </Center>
    </>
  );
};

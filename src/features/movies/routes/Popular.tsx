import { Loader } from '@mantine/core';
import { usePopular } from '../api/getPopular';
import { MovieList } from '../components/MovieList';

export const Popular = () => {
  const popularQuery = usePopular();

  if (popularQuery.isLoading) {
    return <Loader />;
  }

  if (!popularQuery?.data?.results) return null;

  return <MovieList movies={popularQuery.data.results} />;
};

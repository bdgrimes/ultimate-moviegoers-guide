import { CenteredLoader } from '../../../components/Elements/CenteredLoader';
import { useTopRated } from '../api/getTopRated';
import { MovieList } from '../components/MovieList';

export const TopRated = () => {
  const topRatedQuery = useTopRated();

  if (topRatedQuery.isLoading) {
    return <CenteredLoader />;
  }

  if (!topRatedQuery?.data?.results) return null;

  return <MovieList movies={topRatedQuery.data.results} />;
};

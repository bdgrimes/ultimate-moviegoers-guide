import { CenteredLoader } from '../../../components/Elements/CenteredLoader';
import { useNowPlaying } from '../api/getNowPlaying';
import { MovieList } from '../components/MovieList';

export const NowPlaying = () => {
  const nowPlayingQuery = useNowPlaying();

  if (nowPlayingQuery.isLoading) {
    return <CenteredLoader />;
  }

  if (!nowPlayingQuery?.data?.results) return null;

  return <MovieList movies={nowPlayingQuery.data.results} />;
};

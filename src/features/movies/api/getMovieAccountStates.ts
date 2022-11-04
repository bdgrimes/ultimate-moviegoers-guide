import { useQuery } from '@tanstack/react-query';
import { MovieAccountStates } from '../types/MovieAccountStates';

export const getMovieAccountStates = async (
  movieId: number,
  guestSessionId: string
): Promise<MovieAccountStates> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/account_states?api_key=e2f91aa33bd87c356d18db8b8978fe44&guest_session_id=${guestSessionId}`
  );

  return res.json();
};

export const useMovieAccountState = (movieId: number, guestSessionID: string) => {
  return useQuery({
    queryKey: ['movie', movieId, 'accountState'],
    queryFn: () => getMovieAccountStates(movieId, guestSessionID),
    enabled: !!guestSessionID,
  });
};

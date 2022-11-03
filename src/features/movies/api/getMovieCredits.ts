import { useQuery } from '@tanstack/react-query';
import { Credits } from '../types';

export const getMovieCredits = async (movieId: number): Promise<Credits> => {
  const res = await fetch(
    ` https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=e2f91aa33bd87c356d18db8b8978fe44&language=en-US`
  );

  return res.json();
};

export const useMovieCredits = (movieId: number) => {
  return useQuery({
    queryKey: ['credits', movieId],
    queryFn: () => getMovieCredits(movieId),
  });
};

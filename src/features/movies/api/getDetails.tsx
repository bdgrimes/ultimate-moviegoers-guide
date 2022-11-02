import { useQuery } from '@tanstack/react-query';
import { Details } from '../types';

export const getDetails = async (movieId: number): Promise<Details> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=e2f91aa33bd87c356d18db8b8978fe44&language=en-US`
  );

  return res.json();
};

export const useDetails = (movieId: number) => {
  return useQuery({
    queryKey: ['movie', movieId],
    queryFn: () => getDetails(movieId),
  });
};

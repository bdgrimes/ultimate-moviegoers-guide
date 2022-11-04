import { useQuery } from '@tanstack/react-query';
import { MovieDetails } from '../types';

export const getMovieDetails = async (movieId: number): Promise<MovieDetails> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=e2f91aa33bd87c356d18db8b8978fe44&language=en-US`
  );

  return res.json();
};

export const useMovieDetails = (movieId: number) => {
  return useQuery({
    queryKey: ['movie', movieId],
    queryFn: () => getMovieDetails(movieId),
  });
};

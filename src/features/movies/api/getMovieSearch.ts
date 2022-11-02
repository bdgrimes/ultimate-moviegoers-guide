import { useQuery } from '@tanstack/react-query';
import { PaginatedMovies } from '../types';

export const getMovieSearch = async (movieQuery: string): Promise<PaginatedMovies> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=e2f91aa33bd87c356d18db8b8978fe44&language=en-US&query=${movieQuery}&page=1&include_adult=false`
  );

  return res.json();
};

export const useMovieSearch = (movieQuery: string) => {
  return useQuery({
    queryKey: ['movies', 'search', movieQuery],
    queryFn: () => getMovieSearch(movieQuery),
  });
};

import { useQuery } from '@tanstack/react-query';
import { PaginatedMovies } from '../types';

export const getPopular = async (): Promise<PaginatedMovies> => {
  const res = await fetch(
    'https://api.themoviedb.org/3/movie/popular?api_key=e2f91aa33bd87c356d18db8b8978fe44&language=en-US&page=1'
  );
  return res.json();
};

export const usePopular = () => {
  return useQuery({
    queryKey: ['movies', 'popular'],
    queryFn: getPopular,
  });
};

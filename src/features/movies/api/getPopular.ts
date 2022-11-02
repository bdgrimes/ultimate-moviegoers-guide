import { useInfiniteQuery } from '@tanstack/react-query';
import { PaginatedMovies } from '../types';

export const getPopular = async ({ pageParam = 1 }): Promise<PaginatedMovies> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=e2f91aa33bd87c356d18db8b8978fe44&language=en-US&page=${pageParam}`
  );
  return res.json();
};

export const usePopular = () => {
  return useInfiniteQuery({
    queryKey: ['movies', 'popular'],
    queryFn: getPopular,
    keepPreviousData: true,
    getNextPageParam: (lastPage) => {
      if (lastPage.page === lastPage.total_pages) return undefined;
      return lastPage.page + 1;
    },
  });
};

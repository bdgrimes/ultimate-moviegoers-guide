import { useInfiniteQuery } from '@tanstack/react-query';
import { PaginatedMovies } from '../types';

export const getTopRated = async ({ pageParam = 1 }): Promise<PaginatedMovies> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=e2f91aa33bd87c356d18db8b8978fe44&language=en-US&page=${pageParam}`
  );
  return res.json();
};

export const useTopRated = () => {
  return useInfiniteQuery({
    queryKey: ['movies', 'top-rated'],
    queryFn: getTopRated,
    keepPreviousData: true,
    getNextPageParam: (lastPage) => {
      if (lastPage.page === lastPage.total_pages) return undefined;
      return lastPage.page + 1;
    },
  });
};

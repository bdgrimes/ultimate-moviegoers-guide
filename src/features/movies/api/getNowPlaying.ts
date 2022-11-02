import { useInfiniteQuery } from '@tanstack/react-query';
import { PaginatedMoviesWithDates } from '../types';

export const getNowPlaying = async ({ pageParam = 1 }): Promise<PaginatedMoviesWithDates> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=e2f91aa33bd87c356d18db8b8978fe44&language=en-US&page=${pageParam}`
  );
  return res.json();
};

export const useNowPlaying = () => {
  return useInfiniteQuery({
    queryKey: ['movies', 'now-playing'],
    queryFn: getNowPlaying,
    keepPreviousData: true,
    getNextPageParam: (lastPage) => {
      if (lastPage.page === lastPage.total_pages) return undefined;
      return lastPage.page + 1;
    },
  });
};

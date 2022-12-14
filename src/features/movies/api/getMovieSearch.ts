import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { PaginatedMovies } from '../types';

export const getMovieSearch = async (movieQuery: string): Promise<PaginatedMovies> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=e2f91aa33bd87c356d18db8b8978fe44&language=en-US&query=${movieQuery}&page=1&include_adult=false`
  );

  return res.json();
};

export const getInfiniteMovieSearch = async ({
  movieQuery,
  pageParam,
}: {
  movieQuery: string;
  pageParam: number;
}): Promise<PaginatedMovies> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=e2f91aa33bd87c356d18db8b8978fe44&language=en-US&query=${movieQuery}&page=${pageParam}&include_adult=false`
  );

  return res.json();
};

export const useMovieSearch = (movieQuery: string) => {
  return useQuery({
    queryKey: ['search', 'movies', movieQuery],
    queryFn: () => getMovieSearch(movieQuery),
    enabled: movieQuery.trim().length > 0,
  });
};

export const useInfiniteMovieSearch = (movieQuery: string) => {
  return useInfiniteQuery({
    queryKey: ['search', 'movies', 'infinite', movieQuery],
    queryFn: ({ pageParam = 1 }) => getInfiniteMovieSearch({ movieQuery, pageParam }),
    keepPreviousData: false,
    getNextPageParam: (lastPage) => {
      if (lastPage.page === lastPage.total_pages) return undefined;
      return lastPage.page + 1;
    },
  });
};

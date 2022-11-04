import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { PaginatedRatedMovies } from '../types';

export const getRatedMovies = async ({
  guestSessionId,
}: {
  guestSessionId: string | undefined;
}): Promise<PaginatedRatedMovies> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/guest_session/${guestSessionId}/rated/movies?api_key=e2f91aa33bd87c356d18db8b8978fe44&language=en-US&sort_by=created_at.asc`
  );

  return res.json();
};

export const useRatedMovies = (guestSessionId: string | undefined) => {
  return useQuery({
    queryKey: ['movies', 'rated'],
    queryFn: () => getRatedMovies({ guestSessionId }),
    enabled: guestSessionId !== undefined,
  });
};

export const useInfiniteRatedMovies = (guestSessionId: string | undefined) => {
  return useInfiniteQuery({
    queryKey: ['movies', 'rated', 'infinite'],
    queryFn: () => getRatedMovies({ guestSessionId }),
    keepPreviousData: false,
    enabled: guestSessionId !== undefined,
    getNextPageParam: (lastPage) => {
      if (lastPage.page === lastPage.total_pages) return undefined;
      return lastPage.page + 1;
    },
  });
};

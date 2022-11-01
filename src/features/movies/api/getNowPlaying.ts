import { useQuery } from '@tanstack/react-query';

export const getNowPlaying = async () => {
  const res = await fetch(
    'https://api.themoviedb.org/3/movie/now_playing?api_key=e2f91aa33bd87c356d18db8b8978fe44&language=en-US&page=1'
  );
  return res.json();
};

export const useNowPlaying = () => {
  return useQuery({
    queryKey: ['movies', 'now-playing'],
    queryFn: () => getNowPlaying,
  });
};

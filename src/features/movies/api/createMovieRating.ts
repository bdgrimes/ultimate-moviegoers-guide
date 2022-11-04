import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../../libs/react-query';
import { MovieRating } from '../types/MovieRating';

interface RateMovieDto {
  movieId: number;
  guestSessionId: string;
  data: {
    value: number;
  };
}

export const createMovieRating = async ({
  movieId,
  guestSessionId,
  data,
}: RateMovieDto): Promise<MovieRating> => {
  const settings = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf8',
    },
    body: JSON.stringify({
      value: data.value,
    }),
  };

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/rating?api_key=e2f91aa33bd87c356d18db8b8978fe44&guest_session_id=${guestSessionId}`,
    settings
  );

  return res.json();
};

export const useCreateMovieRating = () => {
  return useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries(['movies', 'rated']);
    },
    mutationFn: createMovieRating,
  });
};

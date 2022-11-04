import { useState, useEffect } from 'react';
import { Rating } from '@mantine/core';
import { useGuestSession } from '../../auth/hooks/useGuestSession';
import { useCreateMovieRating } from '../api/createMovieRating';
import { useRatedMovies } from '../api/getRatedMovies';
import { CenteredLoader } from '../../../components/Elements/CenteredLoader';
import { fiveStarRatingToTenStarRating, tenStarRatingToFiveStarRating } from '../utils/formatting';

interface Props {
  movieId?: number;
}

export const PersonalMovieRating = ({ movieId }: Props) => {
  const guestSession = useGuestSession();
  const ratedMoviesQuery = useRatedMovies(guestSession?.guest_session_id);
  const [rating, setRating] = useState<number>(-1);
  const rateMovieMutation = useCreateMovieRating();

  //Fill in an existing rating if there is one from the API response
  useEffect(() => {
    if (!ratedMoviesQuery.data) return;
    const existingRatedMovie = ratedMoviesQuery.data.results.find(
      (ratedMovie) => ratedMovie.id === movieId
    );
    if (!existingRatedMovie) return;
    const ratingAsFiveStars = tenStarRatingToFiveStarRating(existingRatedMovie.rating);
    setRating(ratingAsFiveStars);
  }, [ratedMoviesQuery.data, movieId]);

  const handleRatingChanged = async (ratingValue: number) => {
    if (!movieId || !guestSession) return;
    const tenStarRating = fiveStarRatingToTenStarRating(ratingValue);
    await rateMovieMutation.mutateAsync({
      movieId: movieId,
      guestSessionId: guestSession.guest_session_id,
      data: {
        value: tenStarRating,
      },
    });
  };

  if (ratedMoviesQuery.isLoading) return <CenteredLoader />;

  return (
    <Rating
      fractions={2}
      value={rating}
      onChange={(currValue) => {
        setRating(currValue);
        handleRatingChanged(currValue);
      }}
      readOnly={rating > -1}
    />
  );
};

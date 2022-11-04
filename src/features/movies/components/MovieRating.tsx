import { Rating } from '@mantine/core';
import { tenStarRatingToFiveStarRating } from '../utils/formatting';

interface Props {
  rating: number | undefined;
}

export const MovieRating = ({ rating }: Props) => {
  const voteAverageAsFiveStarCount = tenStarRatingToFiveStarRating(rating);

  return <Rating fractions={2} value={voteAverageAsFiveStarCount} readOnly />;
};

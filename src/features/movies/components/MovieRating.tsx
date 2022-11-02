import { Rating } from '@mantine/core';

interface Props {
  vote_average: number | undefined;
}

export const MovieRating = ({ vote_average }: Props) => {
  const voteAverageAsFiveStarCount = ((vote_average || 0) * 10) / 20;

  return <Rating fractions={2} value={voteAverageAsFiveStarCount} readOnly />;
};

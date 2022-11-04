import { Genre } from '../types';

//Converts array of genres to a string in the format of Genre / Genre
export const formatGenresAsString = (genres: Genre[] | undefined): string => {
  if (!genres) return '';
  return genres.map((genre) => `${genre.name}`).join('/');
};

//Extracts the year part of the release date string format of 2022-11-02
export const getReleaseYearFromReleaseDate = (releaseDate: string | undefined): string => {
  if (!releaseDate) return '()';
  const splitReleaseDate = releaseDate.split('-');
  if (splitReleaseDate.length === 0) return '()';
  return `(${splitReleaseDate[0]})`;
};

//Converts from a rating score out of 10 to a score out of 5
export const tenStarRatingToFiveStarRating = (rating: number | undefined): number => {
  if (!rating) return 0;
  return (rating * 10) / 20;
};

//Converts from a rating score out of 5 to a score out of 10
export const fiveStarRatingToTenStarRating = (rating: number | undefined): number => {
  if (!rating) return 0;
  return (rating / 10) * 20;
};

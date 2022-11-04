import { Routes, Route } from 'react-router-dom';
import { MovieDetails } from './MovieDetails';
import { NowPlaying } from './NowPlaying';
import { Popular } from './Popular';
import { RatedMovies } from './RatedMovies';
import { SearchedMovies } from './SearchedMovies';
import { TopRated } from './TopRated';

export const MovieRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<NowPlaying />} />
      <Route path="popular" element={<Popular />} />
      <Route path="top-rated" element={<TopRated />} />
      <Route path="rated" element={<RatedMovies />} />
      <Route path=":movieId" element={<MovieDetails />} />
      <Route path="/search/:movieName" element={<SearchedMovies />} />
    </Routes>
  );
};

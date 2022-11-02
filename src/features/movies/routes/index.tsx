import { Routes, Route } from 'react-router-dom';
import { NowPlaying } from './NowPlaying';
import { Popular } from './Popular';
import { TopRated } from './TopRated';

export const MovieRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<NowPlaying />} />
      <Route path="popular" element={<Popular />} />
      <Route path="top-rated" element={<TopRated />} />
    </Routes>
  );
};

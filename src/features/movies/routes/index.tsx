import { Routes, Route } from 'react-router-dom';
import { NowPlaying } from './NowPlaying';

export const MovieRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<NowPlaying />} />
    </Routes>
  );
};

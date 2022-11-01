import { Routes, Route } from 'react-router-dom';
import { Movies } from './Movies';

export const MovieRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Movies />} />
    </Routes>
  );
};

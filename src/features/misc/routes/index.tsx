import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';

export const MiscRoutes = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

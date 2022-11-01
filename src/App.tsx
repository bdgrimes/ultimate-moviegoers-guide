import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { MovieRoutes } from './features/movies';

const App = () => {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieRoutes />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
};

export default App;

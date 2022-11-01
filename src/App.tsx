import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { MovieRoutes } from './features/movies';
import { MainLayout } from './components/Layout';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './libs/react-query';

const App = () => {
  return (
    <MantineProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<MovieRoutes />} />
            </Route>
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </MantineProvider>
  );
};

export default App;

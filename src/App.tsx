import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { MovieRoutes } from './features/movies';
import { MainLayout } from './components/Layout';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './libs/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { Button } from '@mantine/core';

const ErrorFallback = () => {
  return (
    <div>
      <h2>Oops! Something went wrong</h2>;
      <Button onClick={() => window.location.assign(window.location.origin)}>Refresh</Button>
    </div>
  );
};

const App = () => {
  return (
    <MantineProvider>
      <BrowserRouter>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<MovieRoutes />} />
              </Route>
            </Routes>
          </QueryClientProvider>
        </ErrorBoundary>
      </BrowserRouter>
    </MantineProvider>
  );
};

export default App;

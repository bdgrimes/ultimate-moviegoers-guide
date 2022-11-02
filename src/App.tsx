import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { MantineProvider, Button, Loader } from '@mantine/core';
import { MovieRoutes } from './features/movies';
import { MainLayout } from './components/Layout';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './libs/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorPage } from './router-error-page';

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
    <React.Suspense fallback={<Loader />}>
      <MantineProvider>
        <HashRouter>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <QueryClientProvider client={queryClient}>
              <Routes>
                <Route path="*" element={<ErrorPage />} />
                <Route path="/" element={<MainLayout />}>
                  <Route index element={<MovieRoutes />} />
                </Route>
              </Routes>
            </QueryClientProvider>
          </ErrorBoundary>
        </HashRouter>
      </MantineProvider>
    </React.Suspense>
  );
};

export default App;
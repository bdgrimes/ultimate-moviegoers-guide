import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

const routes = [
  {
    path: '/',
    element: null,
  },
];

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <MantineProvider>
      <RouterProvider router={router} />;
    </MantineProvider>
  );
};

export default App;

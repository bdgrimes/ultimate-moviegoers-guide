import { Outlet } from 'react-router-dom';
import { AppShell } from '@mantine/core';
import { Header } from '../Header';

export const MainLayout = () => {
  return (
    <AppShell padding="md" header={<Header />}>
      <Outlet />
    </AppShell>
  );
};

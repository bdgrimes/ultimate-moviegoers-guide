import { Loader, Center } from '@mantine/core';

export const CenteredLoader = () => {
  return (
    <Center style={{ width: '100%', height: '100%' }}>
      <Loader />
    </Center>
  );
};

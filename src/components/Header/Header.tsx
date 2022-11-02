import { Group, Header as MantineHeader, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <MantineHeader height={50} p="xs">
      <Group position="left">
        <Text weight="bold" component={Link} to="/">
          UMMG 🎬
        </Text>
        <Text component={Link} to="/movies" weight="bold" color={'blue'}>
          Now Playing
        </Text>
        <Text component={Link} to="/movies/popular" weight="bold" color={'blue'}>
          Popular
        </Text>
        <Text component={Link} to="/movies/top-rated" weight="bold" color={'blue'}>
          Top Rated
        </Text>
      </Group>
    </MantineHeader>
  );
};

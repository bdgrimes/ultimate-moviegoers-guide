import { createStyles, Burger, Menu, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}));

export const HeaderMenu = () => {
  const { classes } = useStyles();
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Burger className={classes.burger} opened={opened} onClick={toggle} size="sm" />
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Links</Menu.Label>
        <Menu.Item>
          <Text component={Link} to="/movies" color="blue" onClick={close}>
            Now Playing
          </Text>
        </Menu.Item>
        <Menu.Item>
          <Text component={Link} to="/movies/popular" color="blue" onClick={close}>
            Popular
          </Text>
        </Menu.Item>
        <Menu.Item>
          <Text component={Link} to="/movies/top-rated" color="blue" onClick={close}>
            Top Rated
          </Text>
        </Menu.Item>
        <Menu.Item>
          <Text component={Link} to="/about" color="blue" onClick={close}>
            About
          </Text>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

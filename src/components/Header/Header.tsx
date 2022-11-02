import {
  createStyles,
  Burger,
  Group,
  Header as MantineHeader,
  Text,
  Box,
  Menu,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { MovieSearch } from '../../features/movies/components/MovieSearch';
import { useDisclosure } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
  link: {
    color: theme.colors.blue[5],
    fontWeight: 500,
    borderRadius: theme.radius.sm,
    padding: '5px 5px',
    '&:hover': {
      backgroundColor: theme.colors.blue[1],
    },
    marginRight: 'auto',
  },
  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
  linkContainer: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

export const Header = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes } = useStyles();

  return (
    <MantineHeader height={50} p="xs">
      <Box className={classes.container}>
        <Group>
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
          <Text weight="bold" component={Link} to="/" mr={5}>
            UMMG 🎬
          </Text>
        </Group>
        <Group>
          <Group ml={50} spacing={5} className={classes.linkContainer}>
            <Text component={Link} to="/movies" className={classes.link}>
              Now Playing
            </Text>
            <Text component={Link} to="/movies/popular" className={classes.link}>
              Popular
            </Text>
            <Text component={Link} to="/movies/top-rated" className={classes.link}>
              Top Rated
            </Text>
            <Text component={Link} to="/about" className={classes.link}>
              About
            </Text>
          </Group>
          <MovieSearch />
        </Group>
      </Box>
    </MantineHeader>
  );
};

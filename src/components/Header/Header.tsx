import { createStyles, Group, Header as MantineHeader, Text, Box } from '@mantine/core';
import { Link } from 'react-router-dom';
import { MovieSearch } from '../../features/movies/components/MovieSearch';
import { HeaderMenu } from './HeaderMenu';
import { NavLink } from './types';

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
  linkContainer: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

const links: NavLink[] = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Now Playing',
    url: '/movies',
  },
  {
    name: 'Popular',
    url: '/movies/popular',
  },
  {
    name: 'Top Rated',
    url: '/movies/top-rated',
  },
  {
    name: 'Rated',
    url: '/movies/rated',
  },
  {
    name: 'About',
    url: '/about',
  },
];

export const Header = () => {
  const { classes } = useStyles();

  const navLinks = links.map((link) => (
    <Text key={link.name} component={Link} to={link.url} className={classes.link}>
      {link.name}
    </Text>
  ));

  return (
    <MantineHeader height={50} p="xs">
      <Box className={classes.container}>
        <Group>
          <HeaderMenu links={links} />
          <Text
            weight="bold"
            component={Link}
            to="/"
            mr={5}
            size={'lg'}
            className={classes.linkContainer}
          >
            UMMG 🎬
          </Text>
        </Group>
        <Group>
          <Group ml={50} spacing={5} className={classes.linkContainer}>
            {navLinks}
          </Group>
          <MovieSearch />
        </Group>
      </Box>
    </MantineHeader>
  );
};

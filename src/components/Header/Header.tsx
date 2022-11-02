import { createStyles, Group, Header as MantineHeader, Text, Box } from '@mantine/core';
import { Link } from 'react-router-dom';
import { MovieSearch } from '../../features/movies/components/MovieSearch';
import { HeaderMenu } from './HeaderMenu';

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
  const { classes } = useStyles();

  return (
    <MantineHeader height={50} p="xs">
      <Box className={classes.container}>
        <Group>
          <HeaderMenu />
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

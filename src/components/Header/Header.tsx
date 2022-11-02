import { createStyles, Container, Group, Header as MantineHeader, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import { MovieSearch } from '../../features/movies/components/MovieSearch';

const useStyles = createStyles((theme) => ({
  link: {
    color: theme.colors.blue[5],
    fontWeight: 500,
    borderRadius: theme.radius.sm,
    padding: '5px 5px',
    '&:hover': {
      backgroundColor: theme.colors.blue[1],
    },
    selectedLink: {
      color: theme.colors.blue[5],
    },
  },
}));

export const Header = () => {
  const { classes } = useStyles();

  return (
    <MantineHeader height={50} p="xs">
      <Container
        fluid
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <Group position="left" spacing={0}>
          <Text weight="bold" component={Link} to="/" mr={5}>
            UMMG 🎬
          </Text>
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
        <Group position="right">
          <MovieSearch />
        </Group>
      </Container>
    </MantineHeader>
  );
};

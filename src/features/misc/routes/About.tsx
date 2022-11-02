import { Grid, Space, Title } from '@mantine/core';
import { ReactComponent as MovieDbSvg } from '../../../assets/themoviedb.svg';

export const About = () => {
  return (
    <Grid m={50}>
      <Grid.Col xl={6} lg={12} sx={{ alignContent: 'center', justifyContent: 'center' }}>
        <MovieDbSvg style={{ maxWidth: '500px', maxHeight: '500px' }} />
      </Grid.Col>
      <Grid.Col xl={6} lg={12}>
        <Title
          order={1}
          weight={200}
          variant="gradient"
          gradient={{ from: 'indigo', to: 'blue', deg: 45 }}
        >
          All movie data provided by The Movie Database (TMBD).
          <Space h="md" />
          https://www.themoviedb.org/
        </Title>
      </Grid.Col>
    </Grid>
  );
};

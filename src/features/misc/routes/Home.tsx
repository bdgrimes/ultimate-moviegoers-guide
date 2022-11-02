import { Grid, Title, Space, Text } from '@mantine/core';
import { ReactComponent as MovieSvg } from '../../../assets/undraw_home_cinema_l7yl.svg';

export const Home = () => {
  return (
    <Grid m={50}>
      <Grid.Col xl={6} lg={12}>
        <MovieSvg style={{ maxHeight: '500px' }} />
      </Grid.Col>
      <Grid.Col xl={6} lg={12}>
        <Title order={1} weight={300}>
          Welcome to the <b>ultimate</b> movie goers guide.
          <Space h="md" />
          <Title order={2} weight={200}>
            A streamlined movie database to quickly find what you're looking for.
          </Title>
        </Title>
      </Grid.Col>
    </Grid>
  );
};

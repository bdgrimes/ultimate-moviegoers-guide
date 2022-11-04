import { Grid, Title, Space } from '@mantine/core';
import { ReactComponent as MovieSvg } from '../../../assets/undraw_home_cinema_l7yl.svg';

export const Home = () => {
  return (
    <Grid align="center" justify="center">
      <MovieSvg style={{ maxWidth: 500 }} />
      <Grid.Col xl={6} lg={12} sm={6}>
        <Title
          order={1}
          weight={300}
          variant="gradient"
          gradient={{ from: 'indigo', to: 'blue', deg: 45 }}
        >
          Welcome to the <b>ultimate</b> movie goers guide.
        </Title>
        <Space h="md" />
        <Title
          order={2}
          weight={200}
          variant="gradient"
          gradient={{ from: 'indigo', to: 'blue', deg: 45 }}
        >
          A streamlined movie database to quickly find what you're looking for.
        </Title>
      </Grid.Col>
    </Grid>
  );
};

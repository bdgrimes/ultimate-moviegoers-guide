import { Card, Group, Image, Rating, Text } from '@mantine/core';

interface Props {
  posterPath: string | null | undefined;
  title: string | undefined;
  voteAverage: number;
}

export const MovieCard = ({ posterPath, title, voteAverage }: Props) => {
  const voteAverageAsFiveStarCount = (voteAverage * 10) / 20;

  return (
    <Card shadow="md" radius="md" p="md">
      <Card.Section>
        {posterPath && (
          <Image
            radius="sm"
            src={`https://image.tmdb.org/t/p/w440_and_h660_face/${posterPath}`}
            alt={title || 'No Title Found'}
          />
        )}
      </Card.Section>
      <Text size="md" weight="semibold" align="center" pb={3}>
        {title || 'No Title Found'}
      </Text>
      <Group position="center">
        <Rating fractions={2} value={voteAverageAsFiveStarCount} />
      </Group>
    </Card>
  );
};

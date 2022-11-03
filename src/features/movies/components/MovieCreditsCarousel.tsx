import { Image, Text } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { CenteredLoader } from '../../../components/Elements/CenteredLoader';
import { useMovieCredits } from '../api/getMovieCredits';

interface Props {
  movieId: number;
}

export const MovieCreditsCarousel = ({ movieId }: Props) => {
  const movieCreditsQuery = useMovieCredits(movieId);

  if (movieCreditsQuery.isLoading) return <CenteredLoader />;

  if (!movieCreditsQuery.data) return null;

  return (
    <Carousel
      withIndicators
      slideSize="1%"
      slideGap="lg"
      loop
      align="start"
      slidesToScroll={3}
      dragFree
    >
      {movieCreditsQuery.data.cast.map((cast) => (
        <Carousel.Slide>
          <Image
            radius="sm"
            src={`https://image.tmdb.org/t/p/w138_and_h175_face/${cast.profile_path} `}
            height={175}
            width={138}
            alt={cast.name}
            withPlaceholder
          />
          <Text align="center" size={'sm'} weight="500">
            {cast.name}
          </Text>
          <Text align="center" size={'sm'}>
            {cast.character}
          </Text>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

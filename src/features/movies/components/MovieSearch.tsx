import { Select } from '@mantine/core';
import { useMovieSearch } from '../api/getMovieSearch';
import { useDebouncedValue } from '@mantine/hooks';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconSearch } from '@tabler/icons';

export const MovieSearch = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState<string>('');
  const [debouncedSearchValue] = useDebouncedValue(searchValue, 500);
  const movieSearchQuery = useMovieSearch(debouncedSearchValue);
  const movieNames = movieSearchQuery?.data?.results?.map((movie) => movie.title);

  const handleMovieSelected = (movieName: string) => {
    const selectedMovie = movieSearchQuery.data?.results?.find(
      (movie) => movie.title === movieName
    );
    if (!selectedMovie) return;
    navigate(`/movies/${selectedMovie.id}`);
  };

  return (
    <Select
      placeholder="Search for a movie..."
      searchable
      nothingFound="No Movie Found"
      data={movieNames || []}
      onSearchChange={setSearchValue}
      onChange={handleMovieSelected}
      searchValue={searchValue}
      maxDropdownHeight={280}
      icon={<IconSearch />}
    />
  );
};

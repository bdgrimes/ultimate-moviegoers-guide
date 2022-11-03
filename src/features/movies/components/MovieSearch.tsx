import { Select } from '@mantine/core';
import { useMovieSearch } from '../api/getMovieSearch';
import { useDebouncedValue } from '@mantine/hooks';
import { KeyboardEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconSearch } from '@tabler/icons';

export const MovieSearch = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState<string>('');
  const [debouncedSearchValue] = useDebouncedValue(searchValue, 200);
  const movieSearchQuery = useMovieSearch(debouncedSearchValue);
  const movieNames = movieSearchQuery?.data?.results?.map((movie) => {
    const obj = {
      value: movie.id.toString(),
      label: movie.title,
    };
    return obj;
  });

  const handleMovieSelected = (value: string) => {
    if (!value) return;
    const foundMovie = movieSearchQuery.data?.results.find(
      (movie) => movie.id.toString() === value
    );
    if (!foundMovie) return;
    navigate(`/movies/search/${foundMovie.title}`);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return;
    navigate(`/movies/search/${searchValue}`);
  };

  return (
    <Select
      placeholder="Search for a movie..."
      searchable
      clearable
      nothingFound="No Movie Found"
      data={movieNames || []}
      onSearchChange={setSearchValue}
      onKeyDown={handleKeyPress}
      onChange={handleMovieSelected}
      searchValue={searchValue}
      maxDropdownHeight={280}
      icon={<IconSearch />}
    />
  );
};

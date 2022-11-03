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

  const handleMovieSelected = () => {
    navigate(`/movies/search/${searchValue}`);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return;
    handleMovieSelected();
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

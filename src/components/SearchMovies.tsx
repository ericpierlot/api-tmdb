import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Search, PageButton } from '../assets/styled/SearchMovie.styled';
import axios from 'axios';

interface SearchMoviesProps {
  setSearchResponse: (value: any) => void;
  isLoading?: boolean;
  setIsLoading: (value: boolean) => void;
  isError?: string;
  setIsError: (value: string) => void;
  searchResponse?: any;
}

const SearchMovies: React.FC<SearchMoviesProps> = ({
  setSearchResponse,
  setIsLoading,
  setIsError,
  searchResponse,
}) => {
  const queryValue = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');

  const fetchQueryMovieCall = useCallback(
    async (inputQuery: string, pageNumber: number = 1) => {
      setIsLoading(true);
      setIsError('');

      try {
        const API_KEY = `1b7ca23a5b227d1913162e359973237a`;
        await axios
          .get(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=fr-FR&page=${pageNumber}&include_adult=false&query=${inputQuery}`
          )
          .then(({ data }) => {
            if (query === '')
              return setSearchResponse({
                query: searchResponse.query,
                page: data.page,
                results: [data.results],
                totalPages: data.total_pages,
                totalResults: data.total_results,
                nextPage: data.page,
              });
            return setSearchResponse({
              query: query,
              page: data.page,
              results: [data.results],
              totalPages: data.total_pages,
              totalResults: data.total_results,
              nextPage: 1,
            });
          });
      } catch (error) {
        setIsError('Une erreur est survenue, veuillez réessayer.');
      }
    },
    [query, searchResponse.query, setIsError, setIsLoading, setSearchResponse]
  );

  useEffect(() => {
    if (query) {
      fetchQueryMovieCall(query);
    }
  }, [fetchQueryMovieCall, query, searchResponse.page]);

  const handleQuery = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (queryValue && queryValue.current) {
      setQuery(queryValue.current.value);
    }
  };

  return (
    <>
      <form onSubmit={(e) => handleQuery(e)}>
        <label htmlFor='rechercher'>
          <Search
            ref={queryValue}
            type='search'
            placeholder='Rechercher un film ...'
            name='rechercher'
          />
        </label>
      </form>
      {searchResponse && (
        <PageButton
          onClick={() =>
            fetchQueryMovieCall(searchResponse.query, searchResponse.page - 1)
          }
          disabled={searchResponse.page > 1 ? false : true}
        >
          Page précédente
        </PageButton>
      )}
      {searchResponse && (
        <PageButton
          onClick={() =>
            fetchQueryMovieCall(searchResponse.query, searchResponse.page + 1)
          }
          disabled={
            searchResponse.totalPages !== searchResponse.page ? false : true
          }
        >
          Page suivante
        </PageButton>
      )}
      {searchResponse && searchResponse.totalResults > 0 && (
        <PageButton onClick={() => setSearchResponse([])}>Reset</PageButton>
      )}
    </>
  );
};

export default SearchMovies;

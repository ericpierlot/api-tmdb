import React, { useState } from 'react';
import SearchMovies from '../components/SearchMovies';
import { CardMovie, TOP, Article } from '../assets/styled/Search.styled';
import { Spinner } from '../utils/Spinner';
import { Link } from 'react-router-dom';

interface SearchProps {
  searchResponse: {
    page: number;
    results: any[];
    totalPages: number;
    totalResults: number;
  };
  setSearchResponse: (value: any) => void;
}

const Search: React.FC<SearchProps> = ({
  searchResponse,
  setSearchResponse,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');
  return (
    <>
      <TOP>
        <SearchMovies
          setSearchResponse={setSearchResponse}
          searchResponse={searchResponse}
          isLoading={isLoading}
          isError={isError}
          setIsLoading={setIsLoading}
          setIsError={setIsError}
        />
      </TOP>
      <Article>
        {isError && isError}
        {isLoading ? (
          <Spinner />
        ) : (
          searchResponse.totalResults > 0 &&
          searchResponse.results[0].map((item: any) => {
            const { id, title, poster_path } = item;
            return (
              <Link to={`/movie-details/${id}`} key={id}>
                <CardMovie
                  afficheMovie={
                    `https://image.tmdb.org/t/p/w500/${poster_path}` || ''
                  }
                >
                  <h2>{title}</h2>
                </CardMovie>
              </Link>
            );
          })
        )}
      </Article>
    </>
  );
};

export default Search;

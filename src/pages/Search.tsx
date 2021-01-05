import React, { useState } from 'react';
import SearchMovies from '../components/SearchMovies';
import styled from 'styled-components';
import { Spinner } from '../utils/Spinner';
import {Link} from 'react-router-dom'

interface SearchProps {
  searchResponse: {
    page: number,
    results: any[],
    totalPages: number,
    totalResults: number,
  };
  setSearchResponse: (value: any) => void;
}

const TOP = styled.div`
  input {
    width: 250px;
  }
  @media (max-width: 840px) {
   margin-top: 1rem;
}
`;

const Article = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem 0;
`;

const CardMovie = styled.div<any>`
position: relative;
width: 300px;
height: 300px;
box-shadow: 0 0 30px rgba(0,0,0,0.2);
  background-image: url(${(props) => props.afficheMovie});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 15px;
h2 {
  position: absolute;
  width: 100%;
  background-color: rgba(0,0,0,0.7);
  padding: 0.5rem;
  bottom: -20px;
  left: 0;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
transition: all 330ms ease;
&:hover {
  transform: scale(1.05, 1.05);
  box-shadow: 0 0 30px rgba(0,0,0,0.6);
}

`;

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
                afficheMovie={`https://image.tmdb.org/t/p/w500/${poster_path}` || ''}
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

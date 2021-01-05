import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  Container,
  Pictures,
  Wrapper,
  Notations,
  CardMovie,
  RectangleTop,
  RectangleTop2,
} from '../assets/styled/Home.styled';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [isError, setIsError] = useState('');
  const [searchResponse, setSearchResponse] = useState([] as any);
  const [topRated, setTopRated] = useState([] as any);
  const [topPopular, setTopPopular] = useState([] as any);
  const cardTop = useRef<any>(null);
  const cardPop = useRef<any>(null);

  const fetchActualMovies = useCallback(
    async (debut: number = 0, fin: number = 3) => {
      setIsError('');

      try {
        const API_KEY = `1b7ca23a5b227d1913162e359973237a`;
        axios
          .get(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=fr-FR&page=1&region=FR`
          )
          .then(({ data }) => {
            if (debut === 15)
              return setSearchResponse({
                page: data.page,
                results: [data.results.slice(debut, fin)],
                totalPages: data.total_pages,
                totalResults: data.total_results,
                sliceStart: debut,
                sliceEnd: fin,
                disabled: true,
              });

            return setSearchResponse({
              page: data.page,
              results: [data.results.slice(debut, fin)],
              totalPages: data.total_pages,
              totalResults: data.total_results,
              sliceStart: debut,
              sliceEnd: fin,
            });
          });
      } catch (error) {
        setIsError('Une erreur est survenue, veuillez réessayer.');
      }
    },
    []
  );
  const fetchTopRatedMovies = useCallback(
    async (first: number, last: number) => {
      try {
        const API_KEY = `1b7ca23a5b227d1913162e359973237a`;
        await axios
          .get(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=fr-FR&page=1`
          )
          .then(({ data }) => {
            return setTopRated({
              results: [data.results.slice(first, last)],
              totalResults: data.total_results,
            });
          });
      } catch (error) {
        setIsError('Une erreur est survenue, veuillez réessayer.');
      }
    },
    []
  );

  const fetchTopPopularMovies = useCallback(
    async (first: number, last: number) => {
      try {
        const API_KEY = `1b7ca23a5b227d1913162e359973237a`;
        await axios
          .get(
            `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&languagefr-FR&page=1`
          )
          .then(({ data }) => {
            return setTopPopular({
              results: [data.results.slice(first, last)],
              totalResults: data.total_results,
            });
          });
      } catch (error) {
        setIsError('Une erreur est survenue, veuillez réessayer.');
      }
    },
    []
  );

  useEffect(() => {
    fetchActualMovies();
    fetchTopRatedMovies(0, 10);
    fetchTopPopularMovies(0, 10);
  }, [fetchActualMovies, fetchTopRatedMovies, fetchTopPopularMovies]);

  const handleMouseMove = (e: any, i: number, type: any) => {
    if (type.current) {
      type.current.children[i].style.backgroundPositionY =
        -e.nativeEvent.offsetY * 1.6 + 'px';
    }
  };

  return (
    <Container>
      <h2>En ce moment</h2>
      <Pictures>
        <div>
          <button
            onClick={() =>
              fetchActualMovies(
                searchResponse.sliceStart - 3,
                searchResponse.sliceEnd - 3
              )
            }
            disabled={searchResponse.sliceStart > 0 ? false : true}
          >
            ◄
          </button>
        </div>
        {isError && isError}
        {searchResponse.totalResults > 0 &&
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
          })}
        <div>
          <button
            onClick={() =>
              fetchActualMovies(
                searchResponse.sliceStart + 3,
                searchResponse.sliceEnd + 3
              )
            }
            disabled={searchResponse.disabled}
          >
            ►
          </button>
        </div>
      </Pictures>
      <Wrapper>
        <Notations>
          <h2>TOP 10 Populaire</h2>
          <div ref={cardTop}>
            {topPopular.totalResults > 0 &&
              topPopular.results[0].map((item: any, idx: any) => {
                const { id, title, poster_path } = item;
                return (
                  <RectangleTop
                    key={id}
                    afficheMovie={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    onMouseMove={(e: any) => handleMouseMove(e, idx, cardTop)}
                  >
                    <Link to={`/movie-details/${id}`}>
                      <div>
                        <h3>{title}</h3>
                        <span>►</span>
                      </div>
                    </Link>
                  </RectangleTop>
                );
              })}
          </div>
        </Notations>
        <Notations>
          <h2>TOP 10 Note</h2>
          <div ref={cardPop}>
            {topRated.totalResults > 0 &&
              topRated.results[0].map((item: any, idx: number) => {
                const { id, title, poster_path } = item;
                return (
                  <RectangleTop2
                    key={id}
                    afficheMovie={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    onMouseMove={(e: any) => handleMouseMove(e, idx, cardPop)}
                  >
                    <Link to={`/movie-details/${id}`}>
                      <div>
                        <h3>{title}</h3>
                        <span>►</span>
                      </div>
                    </Link>
                  </RectangleTop2>
                );
              })}
          </div>
        </Notations>
      </Wrapper>
    </Container>
  );
};

export default Home;

import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  Wrapper,
  CardDetails,
  Container,
  BackButton,
  Top,
  Resume,
  Pictures,
  Notations,
  Commentaires,
  CardCom,
  Flex,
} from '../assets/styled/MovieDetails.styled';
import axios from 'axios';
import { Spinner } from '../utils/Spinner';

interface MovieDetailsProps {}

const MovieDetails: React.FC<MovieDetailsProps> = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const [isError, setIsError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [movieData, setMovieData] = useState([] as any);
  const [movieReviews, setMovieReviews] = useState([] as any);

  const fetchMovieReviews = async (ID: string) => {
    setIsLoading(true);
    setIsError('');

    try {
      const API_KEY = `1b7ca23a5b227d1913162e359973237a`;
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/${ID}/reviews?api_key=${API_KEY}&language=en-US`
        )
        .then(({ data }) => {
          setMovieReviews([data]);
          setIsLoading(false);
        });
    } catch (error) {
      setIsError('Une erreur est survenue, veuillez réessayer.');
      setIsLoading(false);
    }
  };

  const fetchMovieDetails = async (ID: string) => {
    setIsLoading(true);
    setIsError('');

    try {
      const API_KEY = `1b7ca23a5b227d1913162e359973237a`;
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/${ID}?api_key=${API_KEY}&language=fr-FR`
        )
        .then(({ data }) => {
          setMovieData([data]);
          setIsLoading(false);
        });
    } catch (error) {
      setIsError('Une erreur est survenue, veuillez réessayer.');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieReviews(id);
    fetchMovieDetails(id);
  }, [id]);

  const checkingColor = (num: number) => {
    if (num >= 6) return 'green';
    if (num < 6 && num > 4) return 'orange';
    if (num <= 4) return 'red';
  };

  return (
    <>
      <Container>
        <BackButton onClick={() => history.goBack()}>Retour</BackButton>
        {isError && isError}
        {isLoading ? (
          <Spinner />
        ) : (
          movieData &&
          movieData.map((item: any) => {
            const {
              id,
              backdrop_path,
              original_title,
              overview,
              poster_path,
              release_date,
              status,
              title,
              vote_average,
              vote_count,
              popularity,
            } = item;

            return (
              <CardDetails key={id}>
                <Top>
                  <h2>{title}</h2>
                  {status === 'Released' && (
                    <h5>
                      Film sortie le :{' '}
                      {release_date.split('-').reverse().join('/')}
                    </h5>
                  )}
                </Top>
                <Pictures>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}` || ''}
                    alt={`Affiche du film ${original_title}`}
                  />
                  <img
                    src={
                      `https://image.tmdb.org/t/p/w500/${backdrop_path}` || ''
                    }
                    alt={`Affiche du film ${original_title}`}
                  />
                </Pictures>
                <Wrapper>
                  <Resume>
                    <h2>Résumé du film {title}</h2>
                    <dt>{overview}</dt>
                  </Resume>
                  <Notations>
                    <h2>Notations</h2>
                    <div>
                      <h5>Popularité</h5>
                      <strong>
                        {parseInt(popularity).toLocaleString('en')}
                      </strong>
                    </div>
                    <div>
                      <h5>Note moyenne</h5>
                      <strong style={{ color: checkingColor(vote_average) }}>
                        {vote_average} / 10
                      </strong>
                    </div>
                    <div>
                      <h5>Nombre de vote</h5>
                      <strong>
                        {parseInt(vote_count).toLocaleString('en')}
                      </strong>
                    </div>
                  </Notations>
                </Wrapper>
                <Commentaires>
                  {movieReviews[0] && movieReviews[0].total_results > 0
                    ? movieReviews[0].results.map((item: any) => {
                        const {
                          author_details: { username, rating, avatar_path },
                          content,
                          created_at,
                          id,
                        } = item;
                        return (
                          <CardCom key={id}>
                            <div>
                              <strong>{username}</strong> :{' '}
                              <strong
                                style={{ color: `${checkingColor(rating)}` }}
                              >
                                {rating}
                              </strong>{' '}
                              / 10
                            </div>
                            <Flex>
                              <img
                                src={
                                  avatar_path &&
                                  avatar_path.split('/').slice(1).join('/')
                                }
                                alt={username}
                              />
                              <p>{content}</p>
                            </Flex>
                            <div>
                              Posté le {new Date(created_at).toLocaleString()}
                            </div>
                          </CardCom>
                        );
                      })
                    : `Il n'y a aucun commentaires sur ce film`}
                </Commentaires>
              </CardDetails>
            );
          })
        )}
      </Container>
    </>
  );
};

export default MovieDetails;

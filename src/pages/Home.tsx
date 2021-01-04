import React, {useState, useEffect, useCallback} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import axios from 'axios'

interface HomeProps {

}
const Container = styled.article`
margin-top: 1rem;
display: flex;
flex-direction: column;
h2 {
  margin-bottom: 2rem;
}
`

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
`


const Pictures = styled.div`
display: flex;
border-radius: 15px;
justify-content: center;
img {
    border-radius: 15px;
    width: auto;
    height: 400px;
margin-bottom: 2rem;
}
div {
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-size: 5rem;
    outline: none;
    transition: all 330ms ease;
    &:hover {
      color: ${({theme}) => theme.navText}
    }
    &:disabled {
  pointer-events: none;
}
  }
}
margin-bottom: 2rem;
`

const Notations = styled.div`
width: 50%;
padding: 1rem;
border-radius: 5px;

div {
    padding: 0 1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    border: 1px solid ${({theme}) => theme.navText};
    margin: 1rem 0;
    border-radius: 5px;
    &:hover {
  background-color: rgba(255,255,255,0.1);
}
}

a {
  text-decoration: none;
}

`

const CardMovie = styled.div<any>`
position: relative;
width: 250px;
height: 250px;
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
bottom:-32px;
border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
transition: all 330ms ease;
&:hover {
  transform: scale(1.05, 1.05);
  box-shadow: 0 0 30px rgba(0,0,0,0.6);
}

margin: 0 1rem;

`;

const Home: React.FC<HomeProps> = () => {
const [isError, setIsError] = useState('');
const [searchResponse, setSearchResponse] = useState([] as any)
const [topRated, setTopRated] = useState([] as any);
const [topPopular, setTopPopular] = useState([] as any);

const fetchActualMovies = useCallback(
  async(debut:number = 0, fin:number = 3) => {
     setIsError('');

     try {
      const API_KEY = `1b7ca23a5b227d1913162e359973237a`;
      axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=fr-FR&page=1&region=FR`)
      .then(({data}) => {
        if(debut === 15) return setSearchResponse({
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
         })

        })

     } catch (error) {
       setIsError('Une erreur est survenue, veuillez réessayer.')
     } 
  },
  [],
) 
const fetchTopRatedMovies = useCallback(async (first:number, last:number) => {
  try {
    const API_KEY = `1b7ca23a5b227d1913162e359973237a`;
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
    .then(({data}) => {
     return setTopRated({
         results: [data.results.slice(first, last)],
         totalResults: data.total_results,
       })
      })

   } catch (error) {
     setIsError('Une erreur est survenue, veuillez réessayer.')
   } 
}, [])

const fetchTopPopularMovies = useCallback(async (first:number, last:number) => {
  try {
    const API_KEY = `1b7ca23a5b227d1913162e359973237a`;
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
    .then(({data}) => {
     return setTopPopular({
         results: [data.results.slice(first, last)],
         totalResults: data.total_results,
       })
      })

   } catch (error) {
     setIsError('Une erreur est survenue, veuillez réessayer.')
   } 
}, [])

 useEffect(() => {
  fetchActualMovies()
  fetchTopRatedMovies(0,10);
  fetchTopPopularMovies(0,10);
   
 }, [fetchActualMovies, fetchTopRatedMovies, fetchTopPopularMovies]);



    return (
      <Container>
        <h2>En ce moment</h2>
        <Pictures>
        <div><button onClick={() => fetchActualMovies(searchResponse.sliceStart - 3, searchResponse.sliceEnd - 3)} disabled={searchResponse.sliceStart > 0 ? false : true}>◄</button></div>
        {isError && isError}
        {
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
        }
         <div><button onClick={() => fetchActualMovies(searchResponse.sliceStart + 3, searchResponse.sliceEnd + 3)} disabled={searchResponse.disabled}>►</button></div>
        </Pictures>
        <Wrapper>
        <Notations>
            <h2>TOP 10 Populaire</h2>
            {
          topPopular.totalResults > 0 &&
          topPopular.results[0].map((item: any) => {
            const { id, title} = item;
            return (
              
                <div key={id}>
                  <Link to={`/movie-details/${id}`}>
                <h4>{title}</h4>
                </Link>
                </div>

            );
          })
        }
           </Notations>
          <Notations>
            <h2>TOP 10 Noté</h2>
            {
          topRated.totalResults > 0 &&
          topRated.results[0].map((item: any) => {
            const { id, title} = item;
            return (
              <Link to={`/movie-details/${id}`} key={id}>
                <div>
                <h4>{title}</h4>
                </div>
              </Link>
            );
          })
        }

          </Notations>
        </Wrapper>
      </Container>
    );
}

export default Home;


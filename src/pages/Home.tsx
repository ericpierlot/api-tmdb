import React, {useState, useEffect, useCallback, useRef} from 'react'
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
 
}
@media (max-width: 840px) {
  margin-top: 0;
  width: 85vw;
h2 {
  text-align: center;
}
}

`

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
@media (max-width: 1360px) {
flex-direction: column;
justify-content: center;

}
@media (max-width: 840px) {
flex-direction: column;

}

`


const Pictures = styled.div`
display: flex;
border-radius: 15px;
justify-content: center;
height: 225px;
@media (max-width: 1360px) {
 flex-direction: column;
  height: 450px;
  flex:1;
}
@media (max-width: 840px) {
 flex-direction: column;
  height: 450px;
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
@media (max-width:1360px) {
  font-size: 3rem;
transform: rotateZ(90deg);
}
@media (max-width: 840px) {
font-size: 3rem;
transform: rotateZ(90deg);

}
  }
}

margin-bottom: 2rem;
`

const Notations = styled.div`
width: 40%;
padding: 1rem;
margin: auto;
a {
  text-decoration: none;
}
@media (max-width: 1360px) {
width: 100%;
text-align: center;
padding: 0;
}
@media (max-width: 840px) {
width: 100%;
text-align: center;
padding: 0;
}

`

const CardMovie = styled.div<any>`
position: relative;
width: 250px;
height: 250px;
@media (max-width: 1360px) {
  width: 70%;
  height: 100px;
  margin: auto;
  margin-bottom: 1rem;
  &:hover {
 height: 500px;
 box-shadow: 0 0 30px rgba(0,0,0,0.6);
}
}
@media (max-width: 840px) {
  width: 100%;
  height: 100px;
}
box-shadow: 0 0 30px rgba(0,0,0,0.2);
  background-image: url(${(props) => props.afficheMovie});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 15px;
  @media (max-width: 840px) {
  background-position: center;
  border-radius: 5px;
}
h2 {
  position: absolute;
  width: 100%;
  background-color: rgba(0,0,0,0.7);
  bottom: -20px;
  left: 0;
border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 0 1rem 0 0.5rem;
  @media (max-width: 840px) {
    bottom: -11px;
  font-size: 0.8rem;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
}
transition: all 330ms ease;
&:hover {
  transform: scale(1.05, 1.05);
  box-shadow: 0 0 30px rgba(0,0,0,0.6);
}
@media (max-width: 1360px) {
  background-position: center;
&:hover {
  transform: none;
}
}
margin: 0 1rem;
@media (max-width: 840px) {
 margin: 0.5rem 0;
}

`;

const RectangleTop = styled.div<any>`
height: 150px;
border-radius: 10px;
background-image: url(${(props) => props.afficheMovie});
background-repeat: no-repeat;
background-size: cover;
position: relative;
box-shadow: 0 0 30px rgba(0,0,0,0.2);

transition: all 0.5s linear;
div {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0rem 0.5rem;
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
  background-color: rgba(0,0,0,0.6);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
&:hover {
 height: 300px;
 box-shadow: 0 0 30px rgba(0,0,0,0.6);
}
margin: 1rem 0;
@media (max-width: 1360px) {
 width: 70%;
 background-size: cover;
 margin: auto;
 margin-bottom: 1rem;
 div {
  font-size: 0.8rem;
 }
}
@media (max-width: 840px) {
 width: 100%;
 div {
  font-size: 0.8rem;
 }
}
`

const RectangleTop2 = styled.div<any>`
height: 150px;
border-radius: 10px;
background-image: url(${(props) => props.afficheMovie});
background-repeat: no-repeat;
background-size: cover;
position: relative;
box-shadow: 0 0 30px rgba(0,0,0,0.2);

transition: all 0.5s linear;
div {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0rem 0.5rem;
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
  background-color: rgba(0,0,0,0.6);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
margin: 1rem 0;
&:hover {
 height: 300px;
 box-shadow: 0 0 30px rgba(0,0,0,0.6);
}
@media (max-width: 1360px) {
 width: 100%;
 div {
  font-size: 0.8rem;
 }
}
@media (max-width: 840px) {
 width: 100%;
 div {
  font-size: 0.8rem;
 }
}
`

const Home: React.FC<HomeProps> = () => {
const [isError, setIsError] = useState('');
const [searchResponse, setSearchResponse] = useState([] as any)
const [topRated, setTopRated] = useState([] as any);
const [topPopular, setTopPopular] = useState([] as any);
const cardTop = useRef<any>(null);
const cardPop = useRef<any>(null);


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
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=fr-FR&page=1`)
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
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&languagefr-FR&page=1`)
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

//  useEffect(() => {
//    if(cardTop.current) {
//     cardTop.current.children[0].classList();
//      }

//  },[]) 

const handleMouseMove = (e:any, i:number, type:any) => {

  if(type.current) {
    type.current.children[i].style.backgroundPositionY = (-e.nativeEvent.offsetY * 1.6 + 'px');
   // cardTop.current.children[i].style.backgroundPositionY = (-e.nativeEvent.offsetX  + 'px');
  }



}

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
            <div ref={cardTop}>
            {
          topPopular.totalResults > 0 &&
          topPopular.results[0].map((item: any, idx:any) => {
            const { id, title, poster_path} = item;
            return (
                <RectangleTop key={id} afficheMovie={`https://image.tmdb.org/t/p/w500/${poster_path}`} onMouseMove={(e:any, i:number) => handleMouseMove(e, idx, cardTop)}>
               <Link to={`/movie-details/${id}`}>
               <div>
              <h3>{title}</h3> 
              <span>►</span>
            </div>
                </Link>
                </RectangleTop>

            );
          })
        }
        </div>
           </Notations>
          <Notations>
            <h2>TOP 10 Note</h2>
            <div ref={cardPop}>

            {
          topRated.totalResults > 0 &&
          topRated.results[0].map((item: any, idx:number) => {
            const { id, title, poster_path } = item;
            return (
              <RectangleTop2 key={id} afficheMovie={`https://image.tmdb.org/t/p/w500/${poster_path}`} onMouseMove={(e:any, i:number) => handleMouseMove(e, idx, cardPop)}>
              <Link to={`/movie-details/${id}`}>
              <div>
              <h3>{title}</h3> 
              <span>►</span>
            </div>
            </Link>

            </RectangleTop2>
            );
          })
        }
</div>
          </Notations>
        </Wrapper>
      </Container>
    );
}

export default Home;

import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Spinner } from '../utils/Spinner'

// interface MoviesProps {

// }

const Movies: React.FC = () => {
const [error, setError] = useState('')
const [isLoading, setIsLoading] = useState(false)
const [latestMovie, setLatestMovie] = useState([] as any)

  useEffect(() => {
    const fetchLatestMovie = async () => {
      try {
        setError('')
        setIsLoading(true);
        const API_KEY = `1b7ca23a5b227d1913162e359973237a`;
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}`);
        setLatestMovie([data])
      } catch (error) {
        console.error(error)
        setError('Une erreur est survenue, veuillez réessayer.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchLatestMovie();

    return () => setLatestMovie([]);
  
  },[])


    return (
      <>
      <h1>Films</h1>
      
      {error && error}
      {isLoading ? <Spinner /> : (
        latestMovie && latestMovie.map((item:any) => {
          const {title, imdb_id} = item;
          return <p key={imdb_id}>{title}</p>
        })
      )}

      </>
    );
}

export default React.memo(Movies);
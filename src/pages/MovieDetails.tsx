import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom';
import styled from 'styled-components'
import axios from 'axios'
import {Spinner} from '../utils/Spinner';

const Container = styled.article`
margin-top: 1rem;
display: flex;
flex-direction: column;
`
const CardDetails = styled.div`

`

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
`
const Top = styled.div`
width: 100%;
border: 1px solid ${({theme}) => theme.navText};
padding: 0rem 1rem;
border-radius: 5px;
display: flex;
justify-content: space-between;
align-items: center;
&:hover {
  background-color: rgba(255,255,255,0.1);
}
h2 {
    margin-right: 1rem;
}
margin-bottom: 2rem;
`

const Pictures = styled.div`
display: flex;
border-radius: 15px;
justify-content: center;
img {
    border-radius: 15px;
    width: auto;
    height: 400px;

    &:nth-child(1) {    
    margin-right: 1rem;
    }
margin-bottom: 2rem;
}
`
const Resume = styled.div`
width: 45%;
padding: 0 1rem;
border: 1px solid ${({theme}) => theme.navText};
border-radius: 5px;
&:hover {
  background-color: rgba(255,255,255,0.1);
}
h2 {
    margin-bottom: 1rem;
}
dt {
    text-align: justify;
    line-height: 1.5rem;
}
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
    align-items: center;
    border: 1px solid ${({theme}) => theme.navText};
    margin: 1rem 0;
    border-radius: 5px;
    &:hover {
  background-color: rgba(255,255,255,0.1);
}
}
`
const BackButton = styled.button`
padding: 0.5rem 1rem;
color: ${({theme}) => theme.navText};
background-color: transparent;
border: 1px solid ${({theme}) => theme.navText};
outline: none;
border-radius: 10px;
cursor: pointer;
&:hover {
  background-color: rgba(255,255,255,0.1);
}
`

interface MovieDetailsProps {
   
}

const MovieDetails: React.FC<MovieDetailsProps> = () => {
    const {id} = useParams<{ id: string }>();
    const history = useHistory();
    const [isError, setIsError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [movieData, setMovieData] = useState([] as any);

    const fetchMovieDetails = async(ID:string) => {
      setIsLoading(true);
      setIsError('');

        try {
            const API_KEY = `1b7ca23a5b227d1913162e359973237a`;
            await axios.get(
                `https://api.themoviedb.org/3/movie/${ID}?api_key=${API_KEY}&language=fr-FR`)
                .then(({data}) => {
                    setMovieData([data]);
                    setIsLoading(false);
                });

        } catch (error) {
            setIsError('Une erreur est survenue, veuillez réessayer.')
            setIsLoading(false);
        }

    }

  useEffect(() => {
    fetchMovieDetails(id);
  }, [id]);

  const checkingColor = (num:number) => {
    if(num >= 6) return 'green'
    if(num < 6 && num > 4) return 'orange'
    if(num <= 4) return 'red'
  }

    return (
        <>
        <BackButton onClick={() => history.goBack()}>Retour</BackButton>
        
        <Container>
            {isError && isError}
            {isLoading ? <Spinner /> : (
                movieData && movieData.map((item:any) => {
                const { id, backdrop_path, original_title, overview, poster_path, release_date, 
                    status, title, vote_average, vote_count, popularity } = item;
                    
                return <CardDetails key={id}>
                    <Top>
                    <h2>{title}</h2>
                    {status === 'Released' && <h5>Film sortie le : {release_date.split('-').reverse().join('/')}</h5>}
                    </Top>
                    <Pictures>
                        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}` || ''} alt={`Affiche du film ${original_title}`}/>
                        <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}` || ''} alt={`Affiche du film ${original_title}`}/>
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
                            <strong>{parseInt(popularity).toLocaleString('en')}</strong>
                        </div>
                        <div>
                            <h5>Note moyenne</h5>
                            <strong style={{color : checkingColor(vote_average)}}>{vote_average} / 10</strong>
                        </div>
                        <div>
                            <h5>Nombre de vote</h5>
                            <strong>{parseInt(vote_count).toLocaleString('en')}</strong>
                        </div>
                    </Notations>
                    </Wrapper>
                </CardDetails>
            }))}

        </Container>
        </>
    );
}

export default MovieDetails;


import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import styled from 'styled-components';
import { RandomUserPicture } from '../api/RandomUserPicture';

interface NavBarProps {
  userName: string | null;
  logoutUser: () => void;
  isLogged: boolean;
  logUser: () => void;
  userGender:string;
}

const Header = styled.header`
padding: 1rem 1rem;
background-color: #2f4550;
width: 300px;
word-break: break-all;
img {
  border-radius: 50%;
}
`

const Navigation = styled.nav`

ul {
  h3 {
    color: #748f8f;
  }
  margin: auto;
  padding: 1rem 0;
  border-bottom: 1px solid #232323;
}

li {
  padding: 0.5rem 0;
  a {
    text-decoration: none;
    font-weight: 500;
  }
}
`

const Button = styled.button`
border: 0;
background-color: #9bbcbc;
color: whitesmoke;
font-weight: bold;
padding: 0.5rem 1rem;
border-radius: 5px;
text-transform: uppercase;
cursor: pointer;
outline: none;
&:hover {
  background-color: #b9cccc;
}
`

const NavBar: React.FC<NavBarProps> = ({userName, logoutUser, isLogged, logUser, userGender}) => {
  const history = useHistory();

  
  const handleLogin = () => {
    logUser();
    history.push('/home');
  }

    return (
      <Header>
       
        {isLogged ? 
        (
          <>
        <Link to='/options'><img src={RandomUserPicture(userGender) || 'https://reporters-et-cie.guerredespagne.fr/images/stories/flexicontent/l_fld19_Profil-inconnu.jpg'} alt={`Profil de ${userName}`} height='72px' width='72px' /></Link>
        <h2>Bienvenue {userName}</h2>
        </>
        )
        : 
        ( 
        <div style={{textAlign: 'center'}}>
          <Button onClick={(e) => handleLogin()}>Se connecter</Button>
        </div>
        )}
        
        <Navigation>

          <ul>
            <li>{isLogged ? <Link to='/home'>🏙 Accueil</Link> : <Link to='/'>🏙 Accueil</Link>}</li>
            <li><Link to='/search'>🔎 Rechercher</Link></li>
          </ul>
          {isLogged && (
          <>
          <ul>
            <h3>👤 Votre compte</h3>
            <li><Link to='/options'>🔋 Paramètres</Link></li>
            <li><Link to='/' onClick={() => logoutUser()}>✈ Se déconnecter</Link></li>
          </ul>
          </>
          )}
          
        </Navigation>
      </Header>
    );
}

export default NavBar;
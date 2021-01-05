import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Header, Button, Navigation } from '../assets/styled/Navbar.styled';
import { RandomUserPicture } from '../api/RandomUserPicture';

interface NavBarProps {
  userName: string | null;
  logoutUser: () => void;
  isLogged: boolean;
  logUser: () => void;
  userGender: string;
  isClicked: boolean;
}

const NavBar: React.FC<NavBarProps> = ({
  userName,
  logoutUser,
  isLogged,
  logUser,
  userGender,
  isClicked,
}) => {
  const history = useHistory();

  const handleLogin = () => {
    logUser();
    if (localStorage.getItem('userName') === 'invite')
      return history.push('/options');
    history.push('/home');
  };

  return (
    <Header render={isClicked}>
      {isLogged ? (
        <>
          <Link to='/options'>
            <img
              src={
                RandomUserPicture(userGender) ||
                'https://reporters-et-cie.guerredespagne.fr/images/stories/flexicontent/l_fld19_Profil-inconnu.jpg'
              }
              alt={`Profil de ${userName}`}
              height='72px'
              width='72px'
            />
          </Link>
          <h2>Bienvenue {userName}</h2>
        </>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <Button onClick={() => handleLogin()}>Se connecter</Button>
        </div>
      )}

      <Navigation>
        <ul>
          <li>
            {isLogged ? (
              <Link to='/home'>🏙 Accueil</Link>
            ) : (
              <Link to='/'>🏙 Accueil</Link>
            )}
          </li>
          <li>
            <Link to='/search'>🔎 Rechercher</Link>
          </li>
        </ul>
        {isLogged && (
          <>
            <ul>
              <h3>👤 Votre compte</h3>
              <li>
                <Link to='/options'>🔋 Paramètres</Link>
              </li>
              <li>
                <Link to='/' onClick={() => logoutUser()}>
                  ✈ Se déconnecter
                </Link>
              </li>
            </ul>
          </>
        )}
      </Navigation>
    </Header>
  );
};

export default NavBar;

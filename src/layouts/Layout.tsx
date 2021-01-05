import React, { useContext, useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import Options from '../pages/Options';
import AuthContext from '../context/auth/authContext';
import LoggedRoute from '../utils/LoggedRoute';
import Container from './Container';
import NavBar from './NavBar';
import { Wrapper, MENUBURGER } from '../assets/styled/Layout.styled';
import Search from '../pages/Search';
import MovieDetails from '../pages/MovieDetails';

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = () => {
  const authContext = useContext(AuthContext);
  const {
    userName,
    loadUser,
    logoutUser,
    isLogged,
    logUser,
    newFirstname,
    newUserGender,
    userGender,
  } = authContext;
  const [searchResponse, setSearchResponse] = useState({
    page: 0,
    results: [''],
    totalPages: 0,
    totalResults: 0,
    nextPage: 1,
  });
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => loadUser(), [loadUser]);

  return (
    <Wrapper menu={isClicked}>
      <NavBar
        userName={userName}
        logoutUser={logoutUser}
        isLogged={isLogged}
        logUser={logUser}
        userGender={userGender}
        isClicked={isClicked}
      />
      <Container>
        <MENUBURGER onClick={() => setIsClicked(!isClicked)}>
          {isClicked ? 'X' : '☰'}
        </MENUBURGER>
        <Route path='/' exact component={() => <Home />} />
        <LoggedRoute path='/home' exact component={() => <Home />} />
        <Route
          path='/search'
          exact
          component={() => (
            <Search
              searchResponse={searchResponse}
              setSearchResponse={setSearchResponse}
            />
          )}
        />
        <Route path='/movie-details/:id' exact>
          <MovieDetails />
        </Route>
        <LoggedRoute
          path='/options'
          exact
          component={() => (
            <Options
              userName={userName}
              newFirstname={newFirstname}
              newUserGender={newUserGender}
              userGender={userGender}
            />
          )}
        />
      </Container>
    </Wrapper>
  );
};
export default Layout;

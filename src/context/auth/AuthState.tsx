import React, { useReducer } from 'react';
import AuthContext from './authContext';
import {
  USER_LOGGED,
  LOG_USER,
  NEW_FIRSTNAME,
  SET_GENDER,
  LOGOUT,
} from '../types';
import authReducer from './authReducer';

const AuthState = (props: any) => {
  const initialState = {
    isLogged: localStorage.getItem('isLogged'),
    userName: localStorage.getItem('userName'),
    favMovies: localStorage.getItem('favMovies'),
    seenMovies: localStorage.getItem('seenMovies'),
    userGender: localStorage.getItem('userGender'),
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const loadUser = () => {
    if (state.isLogged || state.userName) return;
    const userName = localStorage.getItem('userName');

    if (userName) {
      dispatch({ type: USER_LOGGED, payload: userName });
    }
  };

  const logUser = () => {
    const haveUsername = window.localStorage.getItem('userName');
    if (!haveUsername) {
      window.localStorage.setItem('userName', 'invite');
    }

    window.localStorage.setItem('isLogged', 'true');
    const payload = {
      islogged: localStorage.getItem('isLogged'),
      username: window.localStorage.getItem('userName'),
    };

    dispatch({ type: LOG_USER, payload });
  };

  const newFirstname = () => {
    const firstname = localStorage.getItem('userName');
    dispatch({ type: NEW_FIRSTNAME, payload: firstname });
  };

  const logoutUser = () => dispatch({ type: LOGOUT });

  const newUserGender = () => {
    const gender = localStorage.getItem('userGender');
    dispatch({ type: SET_GENDER, payload: gender });
  };

  const addFavorite = (id: number) => {};

  const removeFavorite = (id: number) => {};
  return (
    <AuthContext.Provider
      value={{
        isLogged: state.isLogged,
        userName: state.userName,
        userGender: state.userGender,
        favMovies: state.favMovies,
        loadUser,
        logoutUser,
        logUser,
        newFirstname,
        newUserGender,
        addFavorite,
        removeFavorite,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;

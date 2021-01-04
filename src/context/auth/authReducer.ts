import {
  USER_LOGGED,
  LOG_USER,
  LOGOUT,
  NEW_FIRSTNAME,
  SET_GENDER,
  ADD_FAV_MOVIE,
  REMOVE_FAV_MOVIE,
} from '../types';

const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case USER_LOGGED:
      return {
        ...state,
        userName: action.payload,
      };

    case LOG_USER:
      return {
        ...state,
        userName: action.payload.username,
        isLogged: action.payload.islogged,
      };
    case NEW_FIRSTNAME:
      return {
        ...state,
        userName: action.payload,
      };

    case SET_GENDER:
      return {
        ...state,
        userGender: action.payload,
      };

    case ADD_FAV_MOVIE:
      return {
        ...state,
        favMovies: [...state.favMovies, action.payload],
      };
    case REMOVE_FAV_MOVIE:
      return {
        ...state,
        favMovies: [
          state.favMovies.filter((movie: any) => movie !== action.payload),
        ],
      };
    case LOGOUT:
      window.localStorage.removeItem('isLogged');
      return {
        ...state,
        isLogged: false,
      };
  }
};

export default authReducer;

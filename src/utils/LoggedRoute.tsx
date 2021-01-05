import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';

interface LoggedRouteProps {
  component: any;
  path: string;
  exact: any;
}

const LoggedRoute: React.FC<LoggedRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const authContext = useContext(AuthContext);
  const { isLogged } = authContext;
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogged ? <Component {...props} /> : <Redirect to='/' />
      }
    />
  );
};

export default LoggedRoute;

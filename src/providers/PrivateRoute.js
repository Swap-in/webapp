/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useUser from '../hooks/useUser';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { isLogged } = useUser()
  return (
    <Route
      {...rest}
      render={(routeProps) => (isLogged ? (
        <RouteComponent {...routeProps} />
      ) : (
        <Redirect to='/login' />
      ))}
    />
  );
};

export default PrivateRoute

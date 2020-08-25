/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import Login from '../pages/login';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const currentUser = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(routeProps) => (currentUser ? (
        <RouteComponent {...routeProps} />
      ) : (
        <Redirect to={<Login />} />
      ))}
    />
    // <Route {...rest}>
    //   { currentUser ?
    //     <RouteComponent {...routeProps} /> :
    //     <Redirect to={<Login />} />}
    // </Route>
  );
};

export default PrivateRoute

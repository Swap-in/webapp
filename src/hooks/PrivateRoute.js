/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../context';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const currentUser = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={(routeProps) => (currentUser.token ? (
        <RouteComponent {...routeProps} />
      ) : (
        <Redirect to='/login' />
      ))}
    />

  //  <Route {...rest}>
  //   { currentUser ?
  //      <RouteComponent /> :
  //      <Redirect to='/login'/>}
  //  </Route>

  );
};

export default PrivateRoute

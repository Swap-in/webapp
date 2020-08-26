/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../Context/context'


const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const currentUser = useContext(AuthContext);
  return (
       <Route
         {...rest}
         render={(routeProps) => (currentUser ? (
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

/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
<<<<<<< HEAD
import { AuthContext } from '../Context/context'

=======
import UserContext from '../context';
import Login from '../pages/login';
>>>>>>> 6ac7e424a3e713f93d649595d40fce9320cbefe2

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const currentUser = useContext(UserContext);
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

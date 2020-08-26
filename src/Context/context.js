import React, { useState, useEffect } from 'react';
<<<<<<< HEAD:src/Context/context.js


export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(true);
=======
import UserContext from '../context'

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
>>>>>>> 6ac7e424a3e713f93d649595d40fce9320cbefe2:src/providers/AuthProvider.js

  useEffect(() => {
    setCurrentUser(true)
  }, []);

  return (
    <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
  );
};

export default AuthProvider

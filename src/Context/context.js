import React, { useState, useEffect } from 'react';


export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(true);

  useEffect(() => {
    setCurrentUser(true)
  }, []);

  return (
    <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
  );
};

export default AuthProvider

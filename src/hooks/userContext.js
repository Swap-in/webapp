import React, { useState, useEffect, createContext } from 'react';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser ] = useState(null);

    useEffect(() => {
        setCurrentUser('')
    }, []);

    return(
        <AuthContext.Provider 
            value={(
                currentUser
            )}
        >
            {children}
        </AuthContext.Provider>

    );
};


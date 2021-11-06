import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // const {children} = props;
    const allProvider = useFirebase();
    return (
        <AuthContext.Provider value={allProvider}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
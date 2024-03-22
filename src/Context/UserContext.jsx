import React from 'react';
import { createContext } from 'react';
import { app } from '../firebase/firebase.config';
import { getAuth } from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app)

const UserContext = ({ children }) => {

    const userInfo = {

    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
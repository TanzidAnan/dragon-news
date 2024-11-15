import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase.confige";

export const AuthContext =createContext()
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user,setUser] =useState(null)

    const createNewUser =(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const AuthInfo ={
        user,
        setUser,
        createNewUser
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
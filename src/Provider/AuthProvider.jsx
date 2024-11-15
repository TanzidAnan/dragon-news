import { createContext, useState } from "react";

export const AuthContext =createContext()
const AuthProvider = () => {
    const [user,setUser] =useState({
        name:'tanzid',
        email:'tanzid@gmail.com'
    })

    const AuthInfo ={
        user,
        setUser
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;
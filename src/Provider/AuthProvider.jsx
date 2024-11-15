import { createContext } from "react";

export const AuthContext =createContext()
const AuthProvider = () => {

    const AuthInfo ={

    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;
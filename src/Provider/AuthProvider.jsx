import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase.confige";

export const AuthContext =createContext()
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user,setUser] =useState(null)
    console.log(user)

    const createNewUser =(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const singInUser =(email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut =() =>{
        return signOut(auth)
    }

    useEffect(() =>{
        const unSubserct= onAuthStateChanged(auth, currentUser=>{
            if(currentUser){
                setUser(currentUser)
            }
            else{
                setUser(null)
            }
        })
        return() =>{
            unSubserct()
        }
    },[])
    const AuthInfo ={
        user,
        setUser,
        createNewUser,
        logOut,
        singInUser
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
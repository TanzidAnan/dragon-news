import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase.confige";

export const AuthContext =createContext()
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user,setUser] =useState(null);
    const [loading,setLoading] =useState(true)
    console.log(user)

    const createNewUser =(email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const singInUser =(email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateUserProfile=(updateProfiles) =>{
        return updateProfile(auth.currentUser,updateProfiles)
    }
    const logOut =() =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() =>{
        const unSubserct= onAuthStateChanged(auth, currentUser=>{
            if(currentUser){
                setUser(currentUser);
                setLoading(false)
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
        singInUser,
        loading,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import React, { Children, createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null)
import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from '../firebase/firebase.config';


const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [loading,setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const addUserNameAndPhoto = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser);
            console.log('current user',currentUser);
        });
        return ()=>{
            return unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        signInWithGoogle,
        createUser,
        loginUser,
        addUserNameAndPhoto,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
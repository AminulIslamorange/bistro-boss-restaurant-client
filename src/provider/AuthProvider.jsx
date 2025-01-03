import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,GoogleAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext=createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const[loading,setLoading]=useState(true);
    const googleProvider=new GoogleAuthProvider();

    const googleSignIn=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    };
    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateUserProfile=(name,photo)=>{
        return updateProfile(auth.currentUser, {
            displayName:name, photoURL: photo
          })
    }
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }




    useEffect(()=>{
       const unsubcribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            if(currentUser){
                // get token and store data

            }
            else{
                // do something
            }
            setLoading(false)
        });
        return ()=>{
            return unsubcribe();
        }
    })




    const authInfo={user,loading,createUser,signInUser,logOut,updateUserProfile,googleSignIn}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;
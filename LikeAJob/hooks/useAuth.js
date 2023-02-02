import React, {createContext, useContext, useEffect, useState} from 'react';
import * as Google from "expo-google-app-auth"
import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithCredential,
    signOut,
} from "@firebase/auth";
import {auth} from "../Firebase";

const AuthContext = createContext({});

const config = {
    expoClientId:'735978228111-8naor4i58vi6o8lcbou0nf9lhs2258j3.apps.googleusercontent.com',
    androidClientId: '735978228111-8naor4i58vi6o8lcbou0nf9lhs2258j3.apps.googleusercontent.com',
    iosClientId:'735978228111-5n51ghr2j5nfqrc5uofd1jr6tvf2a0i1.apps.googleusercontent.com',
    scopes : ["profile","email"],
    permissions: ["public_profile","email","gender","location"],
};



export const AuthProvider = ({children}) => {

    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const [loadingInitial, setLoadingInitial] =useState(true);
    const [loading, setLoading] = useState(false);


    useEffect(
        () =>
      onAuthStateChanged(auth, (user) => {
            if (user){
                //Logged
                setUser(user);
            }else {
                //Not Logged
                setUser(null);
            }
            setLoadingInitial(false);
        }),
[]);
    const logout =() => {
        setLoading(true);
        signOut(auth).catch(error => setError(error)).finally(() => setLoading(false));
    }
    const signInWithGoogle = async () => {
        setLoading(true);
        Google.logInAsync(config).then(async (logInResult) => {
            if(logInResult.type === 'success'){
                const { idToken, accessToken } = logInResult;
                const credential = GoogleAuthProvider.credential(idToken, accessToken);

                await signInWithCredential(auth, credential);
            }
            return Promise.reject();

        }).catch(error => setError(error))
            .finally(()=> setLoading(false));
    };



    return (

        <AuthContext.Provider value={{
            user,
            loading,
            error,
            signInWithGoogle,
            logout,
        }}
        >
            {!loadingInitial && children}
        </AuthContext.Provider>
    );
};

export default function useAuth() {
    return useContext(AuthContext);
}


import React from 'react';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../Firebase/Firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";





initializeApp(firebaseConfig);
const Login = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const handleGoggleSign = () => {
        signInWithPopup(auth, provider)
            .then((result) => {

                //const credential = GoogleAuthProvider.credentialFromResult(result);


                const user = result.user;
                console.log(user)

            }).catch((error) => {

                console.log(error)
            });
    }
    return (
        <div>
            <button onClick={handleGoggleSign}>Google Sign Up</button>
        </div>
    );
};

export default Login;
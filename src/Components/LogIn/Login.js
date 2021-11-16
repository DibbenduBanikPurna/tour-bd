import React from 'react';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../Firebase/Firebase';
import { useHistory, useLocation } from 'react-router';



initializeApp(firebaseConfig);


const Login = () => {
    //const [logUser, setLogUser] = useState({})
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };

    const history = useHistory()
    const handleGoggleSignIn = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {


                const user = result.user;
                console.log(user.photoURL)
                sessionStorage.setItem("pic", user.photoURL)
                sessionStorage.setItem("name", user.displayName)
                sessionStorage.setItem("email", user.email)
                history.replace(from);


            }).catch((error) => {

                console.log(error)
            });

    }

    return (
        <div className="text-center mt-5 pt-5">
            <button className="btn btn-warning" onClick={handleGoggleSignIn}>Google Sign Up</button>
        </div>
    );
};

export default Login;
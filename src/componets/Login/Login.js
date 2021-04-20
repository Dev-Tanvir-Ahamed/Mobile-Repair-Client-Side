
import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.Config'
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
firebase.initializeApp(firebaseConfig);



const Login = () => {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  let [loggedInUser, setLoggedInUser] = useContext(UserContext)


    let handleGoogleSignIn = () => {
        var googleProvider = new firebase.auth.GoogleAuthProvider();


        firebase.auth()
  .signInWithPopup(googleProvider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
    var token = credential.accessToken;
    var user = result.user;
    var {displayName, email, photoURL} = result.user;
    let signInUser = {name : displayName, email, photo:photoURL}
    setLoggedInUser(signInUser);
    history.replace(from)
    
    // console.log(loggedInUser);
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(errorCode, errorMessage, email, credential);
    
  });

    }
    return (
        <div className="mt-5">
            <div className="text-center">
            <button onClick={handleGoogleSignIn} className="btn btn-primary">Sign In With Google</button>
            </div>
           
        </div>
    );
};

export default Login;
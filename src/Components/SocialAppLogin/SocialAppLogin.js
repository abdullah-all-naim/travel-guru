import React, { useContext } from 'react';
import facebook from '../../Icon/fb.png';
import google from '../../Icon/google.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const SocialAppLogin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/showdata" } };

    const googleLogin = () => {

        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            var token = result.credential.accessToken;
            const { displayName, photoURL, emailVerified } = result.user;
            const signedInUser = { name: displayName, emailVerified: emailVerified, photoURL: photoURL }
            setLoggedInUser(signedInUser);
            console.log(result.user);
            history.replace(from)
            // ...
        }).catch(function (error) {

        });
    }

    const facebookLogin = () => {
        const providerFb = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(providerFb).then(function (result) {
            var token = result.credential.accessToken;
            const { displayName, photoURL, emailVerified } = result.user;
            const signedInWithFb = { name: displayName, emailVerified: emailVerified, photoURL: photoURL }
            setLoggedInUser(signedInWithFb);
            console.log(result.user);
            history.replace(from)

        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
            var email = error.email;
            var credential = error.credential;
            // ...
        });
    }

    return (
        <div>
            <p className = 'my-4 text-center'>Or</p>
            <div className = 'd-flex justify-content-center my-3'>
                <button className = 'd-flex mb-3' style={{ border: '1px solid lightgrey', width: '25%', borderRadius: '30px', display: 'flex', backgroundColor: 'white' }} onClick={facebookLogin} >
                    <img style={{ width: '30px', height: '30px' }} className = 'mt-3' src = {facebook} alt="" />
                    <p className = 'pt-3 ml-5'>Continue With Facebook</p>
                </button>
            </div>
            <div className = 'd-flex justify-content-center my-3'>
                <button className = 'd-flex mb-3' style={{ border: '1px solid lightgrey', width: '25%', borderRadius: '30px', display: 'flex', backgroundColor: 'white' }} onClick={googleLogin}>
                    <img style={{ width: '30px', height: '30px' }} className = 'mt-3' src = {google} alt="" />
                    <p className = 'pt-3 ml-5'>Continue With Google</p>
                </button>
            </div>
        </div>
    );
};

export default SocialAppLogin;
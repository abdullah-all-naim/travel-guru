import { TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import Navigation from '../Navigation/Navigation';
import SocialAppLogin from '../SocialAppLogin/SocialAppLogin';
import * as firebase from "firebase/app"
import "firebase/auth";
import "firebase/firestore";


const LoginForm = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({
        oldUser: false,
        name: '',
        email: '',
        password: '',
        success: false
    })
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/showdata" } };

    const handleBlur = (e) => {
        console.log(user.email, user.password)
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }

        if (e.target.name === 'password') {
            isFieldValid = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(e.target.value);
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
            setLoggedInUser(newUserInfo);
            console.log(isFieldValid)
        }
    }

    const handleSubmit = (e) => {
        if (!user.oldUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from)

                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        e.preventDefault();
    }

    const verifyEmail = (email) => {
        var auth = firebase.auth();
        var emailAddress = "user@example.com";

        auth.sendPasswordResetEmail(emailAddress).then(function () {
            // Email sent.
        }).catch(function (error) {
            // An error happened.
        });
    }

    return (
        <div>
            <Navigation></Navigation>
            {user.error && <p className = 'text-white bg-danger text-center p-2 mt-3'>{user.error} <Link className = 'text-white' to='/newuserform'>Create a new account</Link></p>}
            <div style =  {{ width: '530px', height: '400px', border: '1px solid lightgrey', borderRadius: '15px', margin: '20px auto 0' }}>
                <form className = "text-center" onSubmit={handleSubmit}>
                    <h2 className = 'mt-5'>Log In</h2>
                    <TextField className = 'mb-3 w-75' id="standard-basic" onBlur = {handleBlur} type='email' name="email" label="Username or Email" required /> <br />
                    <TextField className = 'mb-3 w-75' id="standard-basic" onBlur = {handleBlur} title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" type='password' name="password" label="Password" required /><br />
                    <div className = 'd-flex justify-content-around'>
                        <p className = 'd-inline'> <input type="checkbox" name="" id="" /> Remember me</p>
                        <Link onClick = {verifyEmail} >Forgot Password</Link>
                    </div>
                    <button className = "btn btn-warning w-75 mb-3" type="submit" onSubmit = {() => history.replace(from)} >Login</button>
                    <p>Don't have an account? <Link to='/newuserform'>Create a new account</Link></p>
                </form>
            </div>
            <SocialAppLogin></SocialAppLogin>
        </div>
    );
};

export default LoginForm;
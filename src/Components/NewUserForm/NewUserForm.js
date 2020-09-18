import { TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from '../FireBaseConfig/FireBaseConfig';
import SocialAppLogin from '../SocialAppLogin/SocialAppLogin';
import { UserContext } from '../../App';
firebase.initializeApp(firebaseConfig);

const NewUserForm = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [user, setUser] = useState({
    newUser: false,
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    success: false
  })

  const handleBlur = (e) => {
    console.log(user.email, user.password)
    let isFieldValid = true;
    if (e.target.name === 'name') {
      isFieldValid = /[A-Za-z]/.test(e.target.value);
      console.log(isFieldValid)
    }
    if (e.target.name === 'email') {
      isFieldValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e.target.value);
      console.log(isFieldValid)
    }

    if (e.target.name === 'password') {
      isFieldValid = isFieldValid = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(e.target.value);
      console.log(isFieldValid)
    }
    if (e.target.name === 'confirmPassword') {
      isFieldValid = isFieldValid = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(e.target.value);
      console.log(isFieldValid)
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
    if (!user.newUser && user.email && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = { ...user };
          newUserInfo.error = '';
          newUserInfo.success = true;
          if (user.password === user.confirmPassword) {
            setUser(newUserInfo);
            updateUserName(user.firstname, user.lastname);
            setLoggedInUser(newUserInfo);
          }
          else {
            alert('Please make sure that your passwords are correct')
          }
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

  const updateUserName = (firstname, lastname) => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: firstname + ' ' + lastname
    })
      .then(function () {
        console.log('user name updated successfully')
      })
      .catch(function (error) {
        console.log(error)
      });
    setLoggedInUser(user);
    console.log(loggedInUser)
  }

  return (
    <div>
      <div>
        <Navigation ></Navigation>
      </div>
      {user.error && <p className='text-white bg-danger text-center p-2'>{user.error} <Link className='text-white' to='/loginform'>Click here to login</Link></p>}
      {user.success && <p className="bg-success text-center text-white p-2">User created successfully. <Link to='/loginform'>Click here to login</Link></p>}
      {user.success && <h2 className='text-center'> Hello {user.firstname} {user.lastname}</h2>}
      <div style={{ width: '530px', height: '550px', border: '1px solid lightgrey', borderRadius: '15px', margin: '20px auto 0' }}>
        <form className="text-center" onSubmit={handleSubmit} >
          <h2 className='mt-5'>Create An Account</h2>
          <TextField className='mb-3 w-75' id="standard-basic" type='text' onBlur={handleBlur} name="firstname" label="First Name" required /> <br />
          <TextField className='mb-3 w-75' id="standard-basic" type='text' onBlur={handleBlur} name="lastname" label="Last Name" required /> <br />
          <TextField className='mb-3 w-75' id="standard-basic" type='email' onBlur={handleBlur} name="email" label="Username or Email" title='Please enter a verified email address' required /> <br />
          <TextField className='mb-3 w-75' id="standard-basic" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" type='password' onBlur={handleBlur} name="password" label="Password" required /> <br />
          <TextField className='mb-3 w-75' id="standard-basic" type='password' onBlur={handleBlur} name="confirmPassword" label="Confirm Password" required /> <br />
          <button className="btn btn-warning w-75 mb-3" type="submit" >Create an account</button>
          <p>Already have an account?<Link to='/loginform'>Login</Link></p>
        </form>
      </div>
      <SocialAppLogin></SocialAppLogin>
    </div>

  );
};

export default NewUserForm;
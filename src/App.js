import React, { createContext, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import LoginForm from './Components/SocialAppLogin/SocialAppLogin';
// import Carousel from './Components/Carousel/Carousel';
import MyRoute from './Components/MyRoute/MyRoute';
import ShowData from './Components/ShowData/ShowData';
// import Navigation from './Components/Navigation/Navigation';
export const UserContext = createContext()


function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <BrowserRouter>
        <MyRoute></MyRoute>
        {/* <LoginForm></LoginForm> */}
        {/* <ShowData></ShowData> */}
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

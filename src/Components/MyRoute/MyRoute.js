import React from 'react';
import { Route } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import BookNow from '../BookNow/BookNow';
import ShowData from '../ShowData/ShowData';
import PrivateRoute from '../LoginRoute/LoginRoute';
import LoginForm from '../LoginForm/LoginForm';
import NewUserForm from '../NewUserForm/NewUserForm';


const MyRoute = () => {
    return (
        <div>
            <Route exact path="/" component={Carousel} />
            <Route path="/booknow/:place" component={BookNow} />
            <Route exact path="/newuserform" component={NewUserForm} />
            <Route exact path="/loginform" component={LoginForm} />
            <PrivateRoute exact path="/showdata" component={ShowData} />
        </div>
    );
};

export default MyRoute;
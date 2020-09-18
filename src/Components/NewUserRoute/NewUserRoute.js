import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const NewUserRoute = ({children, ...rest}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.emailVerified? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/loginform",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default NewUserRoute;
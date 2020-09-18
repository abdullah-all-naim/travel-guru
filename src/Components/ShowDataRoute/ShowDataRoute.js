import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const ShowDataRoute = ({children, ...rest}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/showdata",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default ShowDataRoute;

import React from 'react';
import { Route, Redirect } from 'react-router-dom'
const PrivateRoute = ({ children, ...rest }) => {
    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                    sessionStorage.getItem('name') ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
        </div>
    );
};

export default PrivateRoute;
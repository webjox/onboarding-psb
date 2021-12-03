import React, { useContext } from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
// import { Store } from "./App";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const location = useLocation();
    // const { isAuth } = useContext(Store);
    const isAuth = true;
    return (
        <Route {...rest}>
            {isAuth ? (
                <>
                    <Component />
                </>
            ) : (
                <Redirect
                    to={{ pathname: "/login", state: { from: location } }}
                />
            )}
        </Route>
    );
};

export default PrivateRoute;

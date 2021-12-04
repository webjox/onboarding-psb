import React from "react";
import PrivateRoute from "./PrivateRoutes";
import PublicRouter from "./PublicRoutes";
import { Redirect } from "react-router-dom";
const RenderRoutes = ({ basePath = "", routes }) => {
    return routes.map((route) => (
        <>
            {route.private ? (
                <PrivateRoute
                    key={route.path}
                    exact
                    path={`${basePath || ""}${route.path}`}
                    component={route.component}
                    redirect={route.path}
                ></PrivateRoute>
            ) : (
                <PublicRouter
                    key={route.path}
                    exact
                    path={`${basePath || ""}${route.path}`}
                    component={route.component}
                    redirect={route.path}
                ></PublicRouter>
            )}
            {route.children ? (
                <RenderRoutes basePath={route.path} routes={route.children} />
            ) : (
                ""
            )}
            <Redirect to={{ pathname: "/login" }} />
        </>
    ));
};

export default RenderRoutes;

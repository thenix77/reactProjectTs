import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "./auth.lib";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (Auth.isAuthentication()) return <Component {...props} />;
        else
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
      }}
    />
  );
};

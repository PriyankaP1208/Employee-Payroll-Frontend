import React from "react";
import { Route } from "react-router-dom";
import ErrorPage from "../components/errorPage";

function ProtectedRoute({component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
          if(localStorage.getItem('token')) {
          return <Component />;
          } else {
              return <ErrorPage />;
          }
      }}
    />
  );
}

export default ProtectedRoute;
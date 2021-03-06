import React from "react";
import { useLocation, Navigate } from "react-router-dom";

const ProtectedRoute = ( { children } ) => {
  let location = useLocation();

  // let accessToken = localStorage.getItem( "accessToken" );
  let accessToken = true;

  if ( !accessToken ) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return (
      <Navigate
        to="/auth"
        state={ {
          from: location,
        } }
      />
    );
  }

  return children;
};

export default ProtectedRoute;

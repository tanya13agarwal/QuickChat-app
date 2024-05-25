// ProtectRoute.jsx -> if the user is not logged in, redirect him to login page

import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// if the user is not logged in , redirect to log in
const ProtectRoute = ({ children, user, redirect = "/login" }) => {
  if (!user) return <Navigate to={redirect} />;

  // if children available then render children else go to Outlet
  return children ? children : <Outlet />;
};

export default ProtectRoute;
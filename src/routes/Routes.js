import React from "react";
import { ReactLocation, Navigate } from "react-location";
import Login from "../pages/auth/login/Login";
import Registration from "../pages/auth/registrations/Registration";
import Dashboard from "../pages/dashboard/Dashboard";

export const location = new ReactLocation();

export const routes = [
  {
    path: "/",
    children: [
      {
        path: "home",
        element: localStorage.getItem("accessToken") ? (
          <Dashboard />
        ) : (
          <Navigate to="/login" replace={true} />
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/home" replace={true} />,
  },
];

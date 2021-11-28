
import React from "react";
import { Router, Outlet, ReactLocation, Navigate } from "react-location";
import Dashboard from "./pages/admin/Dashboard";
import PageOne from "./pages/admin/pageOne/PageOne";
import PageTwo from "./pages/admin/pageTwo/PageTwo";
import Auth from "./pages/auth/Auth";

const reactLocation = new ReactLocation()

const App = () => {



  return (
    <Router
      location={ reactLocation }
      routes={ [
        {
          path: "/",
          element: <Navigate to='/dashboard' />,
          children: [
            {
              path: "/dashboard",
              element: <Dashboard />,
              children: [
                {
                  path: "/pageone",
                  element: <PageOne />
                },
                {
                  path: "/pagetwo",
                  element: <PageTwo />
                }
              ]
            },
            {
              path: "/auth",
              element: <Auth />
            },
          ]
        }
      ] }
    >
      <div>Header</div>
      <Outlet />
    </Router>
  )
};

export default App;

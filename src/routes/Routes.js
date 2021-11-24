import React from 'react'
import { ReactLocation, Router, Outlet, Link, Navigate } from 'react-location'
import Login from '../pages/auth/login/Login'
import Registration from '../pages/auth/registrations/Registration'
import Dashboard from '../pages/dashboard/Dashboard'





const Routes = () => {
    const reactLocation = new ReactLocation()
    return (
        <Router
        location={reactLocation}
        routes={[
           {
              path: '/',
              children:[
                  {
                      path:"home",
                      element:<Dashboard/>
                  },
                  {
                      path:"login",
                      element: <Login/>
                  },
                  {
                      path:"registration",
                      element: <Registration/>
                  },
                  {
                      element:<Navigate to="/home" />
                  }
              ]
           },
        ]}
     >
          <div>
              <Link to="/home"> home </Link>
              <Link to="/login"> login </Link>
              <Link to="/registration" > registration </Link>
          </div>
          <Outlet />
     </Router>
    )
}

export default Routes

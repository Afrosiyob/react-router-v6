import React, { lazy } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'


const AdminLazy = lazy( () => import( "../pages/admin/Admin" ) )
const AuthLazy = lazy( () => import( "../pages/auth/Auth" ) )



const Routes = () => {
    return (
        <Router>
            <Switch>
                <Redirect exact from="/" to="/admin" />
                <Route path="/admin" component={ AdminLazy } />
                <Route path="/auth" component={ AuthLazy } />
            </Switch>
        </Router>
    )
}

export default Routes

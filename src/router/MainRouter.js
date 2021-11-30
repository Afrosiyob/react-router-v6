import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Admin from "../pages/admin/Admin";
import PageOne from "../pages/admin/pageOne/PageOne";
import PageTwo from "../pages/admin/pageTwo/PageTwo";
import Auth from "../pages/auth/Auth";
import ProtectedRoute from './ProtectedRoute';

const MainRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* main index "/" */ }
                    <Route index element={ <Navigate to="/admin" /> } />

                    {/* admin page "/admin" */ }
                    <Route path="admin" element={
                        <ProtectedRoute>
                            <Admin />
                        </ProtectedRoute>
                    }>
                        <Route index element={ <Navigate to="/admin/page-one" /> } />
                        <Route path="page-one" element={ <PageOne /> } />
                        <Route path="page-two" element={ <PageTwo /> } />
                    </Route>

                    {/* auth page  */ }
                    <Route path="auth" element={ <Auth /> } />

                    <Route path="*" element={ <Navigate to="/admin" /> } />

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default MainRouter

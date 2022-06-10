import React, { Suspense, useLayoutEffect } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";


const AdminRoutes = () => {

    let location = useLocation();
    let state = location.state as { backgroundLocation?: Location };
    console.log("location.state: ", location.state);
    console.log("IN PRIVATE:ROUTES");
    
    return (
        <Routes  location={state?.backgroundLocation || location}>
            <Route path="/" element={<AdminHomePage/>} />
            <Route path="*" element={<NotFoundPage />}/>
        </Routes>
    );
}

export const AdminHomePage = () =>{
    return <div>
        <h1>Admin Home Page</h1>
    </div>
}
export const NotFoundPage = () =>{
    return <div>
        <h1>Admin page not found</h1>
    </div>
}

export default AdminRoutes;

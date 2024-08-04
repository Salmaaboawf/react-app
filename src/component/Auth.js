import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function Auth() {
    console.log("first")
    return (
        <>
            {localStorage.getItem("id") ? <Outlet /> : <Navigate to="/form" />}
        </>
    )
}

export default Auth
import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div>
            <h1>Page Not Found</h1>
            <NavLink to="/login">Back To Homepage</NavLink>
        </div>
    )
}

export default ErrorPage
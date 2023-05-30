import React from 'react'
import { Navigate } from 'react-router'
import AuthService from '../../utils/AuthService'

function LoggedRedirectionRoute({ children }) {
    const logged = AuthService.isLogged()
    return logged ? <Navigate to="/dashboard" /> : children
}

export default LoggedRedirectionRoute

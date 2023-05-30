import React from 'react'
import AuthService from '../../utils/AuthService'
import { Navigate } from 'react-router'

function UnloggedRedirectionRoute({ children }) {
    const logged = AuthService.isLogged()
    return logged ? children : <Navigate to="/login" />
}

export default UnloggedRedirectionRoute

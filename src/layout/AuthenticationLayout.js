import React from 'react'
import { Outlet } from 'react-router'
import Bicycle from '../assets/illustrations/bicycle.svg'
import Navbar from '../components/topNavbar/Navbar'

function AuthenticationLayout() {
    const defaultStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '65vw',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'scroll',
    }

    const mobileStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
    }

    return (
        <>
            <Navbar />
            <div className="login light-background"></div>
            <img className="main-img" src={Bicycle} alt="earth" />
            <Outlet context={[defaultStyle, mobileStyle]} />
        </>
    )
}

export default AuthenticationLayout

import React, { useState } from 'react'
import NavbarLogged from '../components/topNavbar/NavbarLogged'
import { Outlet } from 'react-router'
import { Box, styled, useMediaQuery } from '@mui/material'
import NavigationPanel from '../components/navigationPanel/NavigationPanel'
import { useTheme } from '@mui/material/styles'

function LoggedLayout() {
    const [drawerOpen, setDraweOpen] = useState(true)
    const theme = useTheme()
    const largeScreen = useMediaQuery(theme.breakpoints.up('md'))

    const handleDrawer = () => {
        setDraweOpen(!drawerOpen)
    }

    const mainDrawerWidth = '240px'

    const MainContainer = styled(Box, {
        shouldForwardProp: (prop) => prop !== 'drawerOpen',
    })(({ theme, drawerOpen }) => ({
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: '0px',
        ...(drawerOpen &&
            largeScreen && {
                transition: theme.transitions.create('margin', {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                marginLeft: `${mainDrawerWidth}`,
            }),
    }))

    return (
        <>
            <NavbarLogged handleDrawer={handleDrawer.bind(this)} drawerOpen={drawerOpen} />
            <NavigationPanel drawerOpen={drawerOpen} mainDrawerWidth={mainDrawerWidth} />
            <MainContainer drawerOpen={drawerOpen}>
                <Outlet />
            </MainContainer>
        </>
    )
}

export default LoggedLayout

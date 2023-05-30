import React, { useEffect, useState } from 'react'
import { AppBar, Box, Menu, Link, MenuItem, Toolbar, IconButton, useMediaQuery } from '@mui/material'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person'
import { useTheme } from '@mui/material/styles'

function Navbar() {
    const [displayEntryIcon, setDisplayEntryIcon] = useState(true)
    const [anchorEl, setAnchorEl] = useState(null)
    const [navbarTop, setNavbarTop] = useState(true)

    const hideShadow = {
        boxShadow: 'none',
        backgroundColor: 'transparent',
    }

    const theme = useTheme()
    const location = useLocation()
    const mobileScreen = useMediaQuery(theme.breakpoints.down('md'))

    //esta funcion se ejecuta cada vez que la url cambie
    useEffect(() => {
        if (location.pathname === '/login' || location.pathname === '/register') setDisplayEntryIcon(false)
    }, [location.pathname])

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const changeNavBar = () => {
        if (window.scrollY > 60) {
            setNavbarTop(false)
            console.log(window.scroll)
        } else setNavbarTop(true)
    }

    window.addEventListener('scroll', changeNavBar)

    return (
        <Box display="flex">
            <AppBar
                color=""
                sx={() => {
                    return navbarTop && !mobileScreen ? hideShadow : ''
                }}
                position={mobileScreen ? 'static' : 'fixed'}
            >
                <Toolbar
                    sx={{
                        justifyContent: 'space-between',
                    }}
                >
                    <Link
                        component={RouterLink}
                        to="/"
                        underline="none"
                        sx={{
                            display: 'block',
                            color: 'primary.700',
                            fontSize: '2.2em',
                            fontFamily: 'Comfortaa',
                            marginLeft: '1.7rem',
                            marginTop: '0.5rem',
                        }}
                    >
                        Bimbles
                    </Link>
                    {displayEntryIcon && (
                        <Box>
                            <IconButton
                                aria-label="avatar"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                size="small"
                                sx={{
                                    bgcolor: '#fff',
                                    outline: `solid 1px ${theme.palette.grey['500']}`,
                                }}
                            >
                                <PersonIcon
                                    sx={{
                                        color: `${theme.palette.grey['500']}`,
                                    }}
                                />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <Link component={RouterLink} to="/login" underline="none" color="text.primary">
                                    <MenuItem onClick={handleClose}>Iniciar sesión</MenuItem>
                                </Link>

                                <Link component={RouterLink} to="/register" underline="none" color="text.primary">
                                    <MenuItem onClick={handleClose}>Registrarse</MenuItem>
                                </Link>
                            </Menu>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar

import React from 'react'
import { AppBar, Link, Toolbar, Divider, Box, IconButton } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'

function Navbar({ handleDrawer, drawerOpen }) {
    const top = {
        boxShadow: 'none',
        backgroundColor: 'white',
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar color="primary" sx={top} position="fixed">
                <Toolbar>
                    <Link
                        component={RouterLink}
                        to="/dashboard"
                        underline="none"
                        sx={{
                            display: 'block',
                            color: 'primary.700',
                            fontSize: '2.2em',
                            fontFamily: 'Comfortaa',
                            marginLeft: '1.7rem',
                            marginTop: '0.5rem',
                            marginRight: '3.9rem',
                        }}
                    >
                        Bimbles
                    </Link>
                    <IconButton
                        sx={{
                            display: { xs: 'none', md: 'inline-flex' },
                            color: 'rgba(0,0,0,0.6)',
                            backgroundColor: 'rgba(186, 182, 83, 0.35)',
                            '&:hover': {
                                backgroundColor: '#c5ccaf',
                            },
                        }}
                        onClick={handleDrawer}
                    >
                        {drawerOpen ? <MenuIcon /> : <MenuOpenIcon />}
                    </IconButton>
                </Toolbar>
                <Divider />
            </AppBar>

            {/* Sirve solo para añadir espacio */}
            <Toolbar />
        </Box>
    )
}

export default Navbar

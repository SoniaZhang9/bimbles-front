import React from 'react'
import { Box, CssBaseline, Divider, Drawer, List, ListItemButton, Toolbar } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout'
import AuthService from '../../utils/AuthService'
import NormalUserNavItemList from './NormalUserNavItemList'
import AdminUserNavItemList from './AdminUserNavItemList'

function NormalNavigation({ drawerOpen, mainDrawerWidth }) {
    const [selectedIndex, setSelectedIndex] = React.useState(0)

    const navigate = useNavigate()

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index)
    }

    return (
        <>
            <Drawer
                variant="persistent"
                anchor="left"
                open={drawerOpen}
                sx={{
                    display: { xs: 'none', md: 'block' },
                }}
            >
                <Toolbar />
                <CssBaseline />
                <Box boxShadow="10px 10px lightblue" width={mainDrawerWidth} height="100%">
                    <List
                        component="nav"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            height: '100%',
                        }}
                    >
                        <Box>
                            {AuthService.getUserRole() === 'NORMAL' ? (
                                <NormalUserNavItemList
                                    selectedIndex={selectedIndex}
                                    handleListItemClick={handleListItemClick}
                                />
                            ) : (
                                <AdminUserNavItemList
                                    selectedIndex={selectedIndex}
                                    handleListItemClick={handleListItemClick}
                                />
                            )}
                            <Divider />
                        </Box>
                        <ListItemButton
                            onClick={() => {
                                AuthService.logout()
                                navigate('/', { replace: true })
                            }}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                mb: 6,
                            }}
                        >
                            <LogoutIcon />
                        </ListItemButton>
                    </List>
                </Box>
            </Drawer>
        </>
    )
}

export default NormalNavigation

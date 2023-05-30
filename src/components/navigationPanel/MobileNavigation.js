import React from 'react'
import { BottomNavigation, BottomNavigationAction, Card } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded'

function MobileNavigation() {
    const [value, setValue] = React.useState(0)
    return (
        <Card
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 999,
                display: { xs: 'block', md: 'none' },
                borderTop: '1px solid rgba(0,0,0,0.2)',
            }}
        >
            <BottomNavigation
                color="secondary"
                sx={{ bgcolor: 'white' }}
                showLabels={false}
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue)
                }}
            >
                <BottomNavigationAction component={RouterLink} to="/dashboard" icon={<HomeRoundedIcon />} />
                <BottomNavigationAction component={RouterLink} to="/dashboard/favs" icon={<FavoriteRoundedIcon />} />
                <BottomNavigationAction
                    component={RouterLink}
                    to="/dashboard/preferences"
                    icon={<SettingsRoundedIcon />}
                />
                <BottomNavigationAction component={RouterLink} to="/dashboard/user" icon={<PersonRoundedIcon />} />
                <BottomNavigationAction
                    component={RouterLink}
                    to="/dashboard/add-item"
                    icon={<AddCircleRoundedIcon />}
                />
            </BottomNavigation>
        </Card>
    )
}

export default MobileNavigation

import React from 'react'
import { ListItemButton, ListItemIcon, ListItemText, styled } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'

function NavItem({ index, selectedIndex, handleListItemClick, url, title }) {
    const ListItemButtonStyle = {
        display: 'flex',
        flexDirection: 'column',
    }

    const ListItemIconVertical = styled(ListItemIcon)({
        minWidth: 'unset',
    })

    return (
        <ListItemButton
            component={RouterLink}
            to={url}
            sx={ListItemButtonStyle}
            selected={selectedIndex === index}
            onClick={(event) => handleListItemClick(event, index)}
        >
            <ListItemIconVertical>
                <HomeRoundedIcon />
            </ListItemIconVertical>
            <ListItemText primary={title} />
        </ListItemButton>
    )
}

export default NavItem

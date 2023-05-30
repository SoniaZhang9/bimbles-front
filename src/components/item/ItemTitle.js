import React from 'react'
import { Box, Divider, Stack, Typography } from '@mui/material'
import FavouriteIcon from '../itemsList/FavouriteIcon'
import AuthService from '../../utils/AuthService'

function ItemTitle({ item }) {
    return (
        <Box alignSelf="stretch" mb={2}>
            <Stack direction="row" justifyContent="space-between" mb={0.5}>
                <Typography variant="h4">{item.title}</Typography>
                {AuthService.getUserRole() === 'NORMAL' && <FavouriteIcon itemId={item.id} />}
            </Stack>
            <Divider />
        </Box>
    )
}

export default ItemTitle

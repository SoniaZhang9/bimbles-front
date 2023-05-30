import React from 'react'
import { Box, Divider, Typography } from '@mui/material'

function Title({ content }) {
    return (
        <Box mb={5}>
            <Typography variant="h4">{content}</Typography>
            <Divider />
        </Box>
    )
}

export default Title

import React from 'react'
import PreferencesSelection from '../components/preferences/PreferencesSelection'
import { Box } from '@mui/material'

function Preferences() {
    return (
        <Box px={{ xs: 1.2, md: 7 }} py={4}>
            <PreferencesSelection newUser={false} />
        </Box>
    )
}

export default Preferences

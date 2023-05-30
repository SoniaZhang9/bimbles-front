import React from 'react'
import AccessibleIcon from '@mui/icons-material/Accessible'
import HearingDisabledIcon from '@mui/icons-material/HearingDisabled'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import { Box, Stack, Tooltip, Typography } from '@mui/material'

const accessibleIconsList = [
    { label: 'Instalación accesible para personas con movilidad reducida', icon: <AccessibleIcon /> },
    { label: 'Bucle de inducción magnético', icon: <HearingDisabledIcon /> },
    { label: 'Señalización podotáctil', icon: <VisibilityOffOutlinedIcon /> },
]

function AccessibilityInformation({ access }) {
    return (
        <Box width="100%">
            {(access.physical || access.auditory || access.visual) && (
                <Typography variant="h6">Accesibilidad:</Typography>
            )}
            <Stack direction="row" spacing={1.5}>
                {access.physical && (
                    <Tooltip title={accessibleIconsList.at(0).label} placement="bottom" arrow>
                        {accessibleIconsList.at(0).icon}
                    </Tooltip>
                )}
                {access.auditory && (
                    <Tooltip title={accessibleIconsList.at(1).label} placement="bottom" arrow>
                        {accessibleIconsList.at(1).icon}
                    </Tooltip>
                )}
                {access.visual && (
                    <Tooltip title={accessibleIconsList.at(2).label} placement="bottom" arrow>
                        {accessibleIconsList.at(2).icon}
                    </Tooltip>
                )}
            </Stack>
        </Box>
    )
}

export default AccessibilityInformation

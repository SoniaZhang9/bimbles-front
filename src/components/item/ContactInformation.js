import React from 'react'
import { Box, Divider, Stack, Typography } from '@mui/material'
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined'
import CallIcon from '@mui/icons-material/Call'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder'
import formatMethods from '../../utils/FormatMethods'

function ContactInformation({ item }) {
    const iconProperties = {
        fontSize: 'small',
        color: 'grey',
    }
    const stackProperties = {
        direction: 'row',
        spacing: 1,
        mb: 1,
    }

    return (
        <Box>
            <Typography variant="h6">Datos</Typography>
            <Divider />
            <Stack {...stackProperties} mt={2}>
                <RoomOutlinedIcon {...iconProperties} />
                <Typography variant="caption">{formatMethods.formatAddress(item)}</Typography>
            </Stack>

            <Stack {...stackProperties}>
                <CallIcon {...iconProperties} />
                <Typography variant="caption">{item.phoneNumber}</Typography>
            </Stack>

            {item.website && (
                <Stack {...stackProperties}>
                    <LanguageOutlinedIcon {...iconProperties} />
                    <a href={`https://${item.website}`} target="_blank" rel="noopener noreferrer">
                        {item.website}
                    </a>
                </Stack>
            )}

            {item.schedule && (
                <Stack {...stackProperties}>
                    <QueryBuilderIcon {...iconProperties} />
                    <Typography variant="caption"> {item.schedule}</Typography>
                </Stack>
            )}
        </Box>
    )
}

export default ContactInformation

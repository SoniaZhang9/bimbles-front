import React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import Typography from '@mui/material/Typography'
import AccordionDetails from '@mui/material/AccordionDetails'

function UserInfo({ dataType, dataContent, children }) {
    return (
        <>
            <Accordion sx={{ p: 2 }}>
                <AccordionSummary expandIcon={<BorderColorOutlinedIcon />}>
                    <Typography sx={{ width: '33%', pr: 1, flexShrink: 0 }} variant="body1">
                        {dataType}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {dataContent}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>{children}</AccordionDetails>
            </Accordion>
        </>
    )
}

export default UserInfo

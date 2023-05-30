//Import react
import React from 'react'

//Import allergens icons
import { AllergensIconsList } from '../../assets/icons/AllergensIconsList'
import { Box, Tooltip, Typography } from '@mui/material'

function AllergensInformation({ item }) {
    return (
        <Box width="100%">
            <Typography variant="h6">Ofrece comidas sin:</Typography>
            {item.allergies.map((allergy) => {
                return (
                    <Tooltip key={allergy} title={AllergensIconsList.find((icon) => icon.id === allergy).label} arrow>
                        <span>{AllergensIconsList.find((icon) => icon.id === allergy).icon({ size: 37 })}</span>
                    </Tooltip>
                )
            })}
        </Box>
    )
}

export default AllergensInformation

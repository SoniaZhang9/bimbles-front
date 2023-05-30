import React from 'react'
import { Button, CardActions } from '@mui/material'
import { Cancel, CheckCircle } from '@mui/icons-material'
import restMethods from '../../utils/RestMethods'
import AuthService from '../../utils/AuthService'

function ReviewButtons({ itemId, mutate }) {
    const activateItem = async () => {
        const response = await restMethods.invokePUT(`/item/${itemId}/state`, null, AuthService.getAuthHeader())
        if (response.status === 200) await mutate()
    }

    const deleteItem = async () => {
        const response = await restMethods.invokeDELETE(`/item/${itemId}`, AuthService.getAuthHeader())
        if (response.status === 200) await mutate()
    }

    return (
        <CardActions sx={{ justifyContent: 'space-between' }}>
            <Button onClick={activateItem} size="small" variant="text" color="success" startIcon={<CheckCircle />}>
                Activar
            </Button>
            <Button onClick={deleteItem} size="small" variant="text" color="error" startIcon={<Cancel />}>
                Borrar
            </Button>
        </CardActions>
    )
}

export default ReviewButtons

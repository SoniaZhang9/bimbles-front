import { LoadingButton } from '@mui/lab'
import React from 'react'

function LButton({ loading, type, newUser }) {
    return (
        <LoadingButton
            loading={loading}
            type="submit"
            size="large"
            variant={newUser ? 'outlined' : 'contained'}
            fullWidth
            sx={{ mt: 3, mb: 6 }}
            color="secondary"
        >
            Guardar mis preferencias de {type}
        </LoadingButton>
    )
}

export default LButton

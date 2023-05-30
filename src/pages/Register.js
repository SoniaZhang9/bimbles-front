import React, { useState } from 'react'
import { Link as RouterLink, useOutletContext } from 'react-router-dom'
import { Box, Button, Link, Toolbar, Typography, useMediaQuery } from '@mui/material'
import { theme } from '../theme/theme'
import RegisterDataForm from '../components/forms/RegisterDataForm'
import PreferencesSelection from '../components/preferences/PreferencesSelection'

function Register() {
    const defaultStyle = useOutletContext().at(0)
    const mobileStyle = useOutletContext().at(1)
    const [success, setSuccess] = useState(0)
    const mobileScreen = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Box sx={mobileScreen ? mobileStyle : defaultStyle}>
            {success === 0 ? (
                <>
                    <Typography
                        variant="h3"
                        sx={{
                            fontFamily: 'Nunito Sans',
                            color: 'text.primary',
                            mb: 0.5,
                        }}
                        component="h1"
                    >
                        Regístrate
                    </Typography>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        component="p"
                        sx={{
                            mb: 4,
                            fontSize: '1.2rem',
                        }}
                    >
                        ¡Bienvenido a Bimbles!
                    </Typography>
                    <RegisterDataForm setSuccess={setSuccess} />
                    <Box>
                        <Typography color="text.secondary" variant="body1" component="span">
                            ¿Ya tienes cuenta?
                        </Typography>
                        <Link component={RouterLink} to="/login" underline="none">
                            <Typography variant="a1"> Iniciar sesión </Typography>
                        </Link>
                    </Box>
                </>
            ) : success === 1 ? (
                <>
                    <Toolbar />
                    <PreferencesSelection newUser={true} />
                    <Button
                        size="large"
                        variant="contained"
                        color="secondary"
                        onClick={() => {
                            setSuccess(2)
                        }}
                    >
                        Terminar de crear cuenta
                    </Button>
                </>
            ) : (
                <>
                    <h1>¡Te has registrado con éxito!</h1>
                    <Link component={RouterLink} to="/login">
                        <Typography variant="h4"> Iniciar sesión </Typography>
                    </Link>
                </>
            )}
        </Box>
    )
}

export default Register

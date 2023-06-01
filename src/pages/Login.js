import React, { useState } from 'react'
import { Link as RouterLink, useNavigate, useOutletContext } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {
    Box,
    FormControl,
    IconButton,
    InputAdornment,
    Link,
    Snackbar,
    Stack,
    TextField,
    Typography,
    useMediaQuery,
    Alert,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { useTheme } from '@mui/material/styles'
import AuthService from '../utils/AuthService'
import { loginSchema } from '../utils/ValidationSchemas'
import restMethods from '../utils/RestMethods'
import {setLocale} from "yup"

function Login() {
    // ----------- control data ----------
    const navigate = useNavigate()
    const mobileStyle = useOutletContext().at(0)
    const defaultStyle = useOutletContext().at(1)
    const theme = useTheme()
    const mobileScreen = useMediaQuery(theme.breakpoints.up('sm'))
    const [loading, setLoading] = useState(false)
    const [displayPassword, setDisplayPassword] = useState(false)
    const [alertAuth, setAlertAuth] = useState(false)
    const [serverErrorResponse, setServerErrorResponse] = useState('')
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setAlertAuth(false)
    }

    // ----------- schema validation ----------
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
    })
    setLocale({
        string: {
            min: `Debe tener como mínimo $\{min} caracteres`,
        },
    })

    // ----------- submit function ----------
    const onSubmit = async (data) => {
        setLoading(true)
        setServerErrorResponse('')
        try {
            const user = {
                username: data.username,
                password: data.password,
            }
            const response = await restMethods.invokePOST('/login', user)
            if (response.status === 200) {
                const userData = await response.json()
                const { jwt, userId, role } = userData
                localStorage.setItem('jwt', JSON.stringify(jwt))
                AuthService.loginLogout()
                AuthService.saveUserId(userId)
                AuthService.saveUserRole(role)
                navigate('/dashboard', { replace: true })
            } else {
                if (response.status === 400) {
                    setServerErrorResponse(await response.text())
                }
                setAlertAuth(true)
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
            setAlertAuth(true)
            setLoading(false)
        }
    }

    return (
        <>
            <Box sx={mobileScreen ? mobileStyle : defaultStyle} zIndex={999}>
                <Typography
                    variant="h3"
                    sx={{
                        fontFamily: 'Nunito Sans',
                        color: 'text.primary',
                        mb: 0.5,
                    }}
                    component="h1"
                >
                    Iniciar sesión
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
                    Introduce tus datos
                </Typography>

                <form method="post" onSubmit={handleSubmit(onSubmit)} sx={{ backgroundColor: 'white' }}>
                    <Stack
                        spacing={2.5}
                        sx={{
                            width: { sx: 'auto', sm: '400px' },
                        }}
                    >
                        <TextField
                            {...register('username')}
                            id="username"
                            error={!!errors.username}
                            helperText={errors.username?.message}
                            label="Usuario"
                        />
                        <FormControl>
                            <TextField
                                id="password"
                                {...register('password')}
                                error={!!errors.password}
                                helperText={errors.password?.message}
                                type={displayPassword ? 'text' : 'password'}
                                label="Contraseña"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={() => setDisplayPassword(!displayPassword)} edge="end">
                                                {displayPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </FormControl>
                    </Stack>
                    <LoadingButton
                        loading={loading}
                        type="submit"
                        fullWidth
                        size="large"
                        variant="contained"
                        sx={{
                            mt: 4,
                            mb: 5,
                            p: 1.4,
                        }}
                        color="secondary"
                    >
                        Iniciar sesión
                    </LoadingButton>
                </form>
                <Box>
                    <Typography color="text.secondary" variant="body1" component="span">
                        ¿No tienes cuenta?{' '}
                    </Typography>
                    <Link component={RouterLink} to="/register" underline="none">
                        <Typography variant="a1"> Regístrate aquí</Typography>
                    </Link>
                </Box>
                <Snackbar
                    open={alertAuth}
                    autoHideDuration={3000}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <Alert onClose={handleClose} severity="error">
                        <Typography variant="caption">
                            Ha ocurrido un error de autenticación. {serverErrorResponse}
                        </Typography>
                    </Alert>
                </Snackbar>
            </Box>
        </>
    )
}

export default Login

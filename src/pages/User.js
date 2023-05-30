import * as React from 'react'
import {
    Box,
    Button,
    IconButton,
    InputAdornment,
    LinearProgress,
    Snackbar,
    Stack,
    TextField,
    Typography,
    useMediaQuery,
} from '@mui/material'
import UserInfo from '../components/user/UserInfo'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Alert, AlertTitle } from '@mui/material'
import { theme } from '../theme/theme'
import Title from '../components/Title'
import AuthService from '../utils/AuthService'
import useSWR from 'swr'
import restMethods from '../utils/RestMethods'
import AddressForm from '../components/forms/AddressForm'
import { userSchema } from '../utils/ValidationSchemas'

function User() {
    // ----------- server call ----------
    const { data, error, isLoading, mutate } = useSWR(
        [`/normal-user/${AuthService.getUserId()}`, [], AuthService.getAuthHeader()],
        ([resource, queryParams, headers]) => restMethods.invokeGET(resource, queryParams, headers)
    )
    // ----------- schema validation ----------
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(userSchema),
    })

    // ----------- control data ----------
    const navigate = useNavigate()
    const mobileScreen = useMediaQuery(theme.breakpoints.down('md'))
    const [openSuccessMessage, setOpenSuccessMessage] = React.useState(false)
    const [openFailureMessage, setOpenFailureMessage] = React.useState(false)
    const [displayPassword, setDisplayPassword] = useState(false)
    const handleClose = () => {
        setOpenSuccessMessage(false)
        setOpenFailureMessage(false)
    }

    // ----------- submit function----------
    const onSubmit = async (data) => {
        try {
            const response = await restMethods.invokePUT(
                `/normal-user/${AuthService.getUserId()}`,
                data,
                AuthService.getAuthHeader()
            )
            if (response.status === 200) {
                setOpenSuccessMessage(true)
                await mutate()
            }
        } catch (error) {
            setOpenFailureMessage(true)
        }
    }

    return (
        <Box px={{ xs: 1.2, md: 7 }} py={4}>
            {isLoading ? (
                <LinearProgress />
            ) : error ? (
                <Typography color="error">Ha ocurrido un error: {error.toString()}</Typography>
            ) : (
                <>
                    <Title content={'Perfil'} />
                    <form method="post" onSubmit={handleSubmit(onSubmit)}>
                        <UserInfo dataType={'Nombre y apellidos'} dataContent={data.name + ' ' + data.surname}>
                            <Stack alignItems="baseline" spacing={3} direction={{ xs: 'column', sm: 'row' }} mb={1}>
                                <TextField
                                    label="Nombre"
                                    defaultValue={data.name}
                                    {...register('name')}
                                    error={!!errors.name}
                                    helperText={errors.name?.message}
                                />
                                <TextField
                                    label="Apellidos"
                                    defaultValue={data.surname}
                                    {...register('surname')}
                                    error={!!errors.surname}
                                    helperText={errors.surname?.message}
                                />
                                <Button size="large" variant="contained" type="submit" color="secondary">
                                    Guardar
                                </Button>
                            </Stack>
                        </UserInfo>

                        <Stack sx={{ display: 'none' }}>
                            <TextField {...register('userName')} id="userName" defaultValue={data.userName} />
                        </Stack>

                        <UserInfo dataType={'Contraseña'}>
                            <Stack alignItems="baseline" spacing={3} direction={{ xs: 'column', sm: 'row' }} mb={1}>
                                <TextField
                                    id="password"
                                    label="Contraseña"
                                    defaultValue={data.password}
                                    {...register('password')}
                                    error={!!errors.password}
                                    helperText={errors.password?.message}
                                    type={displayPassword ? 'text' : 'password'}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={() => setDisplayPassword(!displayPassword)}
                                                    edge="end"
                                                >
                                                    {displayPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <Button size="large" variant="contained" type="submit" color="secondary">
                                    Guardar
                                </Button>
                            </Stack>
                        </UserInfo>

                        <UserInfo dataType={'Dirección'}>
                            <Stack alignItems="baseline" spacing={3} direction={{ xs: 'column', sm: 'row' }} mb={1}>
                                <AddressForm register={register} errors={errors} data={data} />
                                <Button size="large" variant="contained" type="submit" color="secondary">
                                    Guardar
                                </Button>
                            </Stack>
                        </UserInfo>
                    </form>
                </>
            )}

            <Snackbar
                open={openSuccessMessage}
                autoHideDuration={2000}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                onClose={handleClose}
            >
                <Alert severity="success">
                    <AlertTitle>Se ha guardado con éxito</AlertTitle>
                </Alert>
            </Snackbar>

            <Snackbar
                open={openFailureMessage}
                autoHideDuration={2000}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                onClose={handleClose}
            >
                <Alert severity="error">
                    <AlertTitle>Ha ocurrido un error</AlertTitle>
                </Alert>
            </Snackbar>

            {mobileScreen && (
                <Button
                    onClick={() => {
                        AuthService.logout()
                        navigate('/', { replace: true })
                    }}
                    size="large"
                    fullWidth
                    variant="outlined"
                    sx={{ mt: 3 }}
                >
                    Cerrar sesión
                </Button>
            )}
        </Box>
    )
}

export default User

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {
    Alert,
    AlertTitle,
    FormControl,
    IconButton,
    InputAdornment,
    Snackbar,
    Stack,
    TextField,
    Typography,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'

import AuthService from '../../utils/AuthService'
import AddressForm from './AddressForm'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AccordionDetails from '@mui/material/AccordionDetails'
import Accordion from '@mui/material/Accordion'
import { userSchema } from '../../utils/ValidationSchemas'
import restMethods from '../../utils/RestMethods'

export default function RegisterDataForm({ setSuccess }) {
    // ----------- control data ----------
    const [loading, setLoading] = useState(false)
    const [openAlert, setOpenAlert] = useState(false)
    const [serverErrorResponse, setServerErrorResponse] = useState('')
    const [displayPassword, setDisplayPassword] = useState(false)
    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setOpenAlert(false)
    }

    // ----------- server call ----------
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(userSchema),
    })

    // ----------- submit function ----------
    const onSubmit = async (data) => {
        setLoading(true)
        setServerErrorResponse('')
        try {
            const response = await restMethods.invokePOST('/register', {
                userName: data.userName,
                name: data.name,
                surname: data.surname,
                password: data.password,
                address: data.address,
            })
            if (response.status === 200) {
                const userData = await response.json()
                AuthService.saveUserId(userData?.id)
                setSuccess(1)
                setLoading(false)
            } else {
                setOpenAlert(true)
                const error = await response.text()
                setServerErrorResponse(error)
                setLoading(false)
            }
        } catch (e) {
            console.log(e)
            setOpenAlert(true)
            setLoading(false)
        }
    }

    return (
        <>
            <Snackbar
                open={openAlert}
                autoHideDuration={3000}
                onClose={handleCloseAlert}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Alert onClose={handleCloseAlert} severity="error">
                    <AlertTitle sx={{ width: '240px' }}>
                        Ha ocurrido un error. {serverErrorResponse} Inténtelo de nuevo.
                    </AlertTitle>
                </Alert>
            </Snackbar>

            <form method="post" onSubmit={handleSubmit(onSubmit)}>
                <Stack
                    spacing={2.5}
                    sx={{
                        maxWidth: '400px',
                    }}
                >
                    <Stack spacing={2.1} direction={{ xs: 'column', sm: 'row' }}>
                        <TextField
                            {...register('name')}
                            error={!!errors.name}
                            helperText={errors.name?.message}
                            label="Nombre"
                        />
                        <TextField
                            {...register('surname')}
                            error={!!errors.surname}
                            helperText={errors.surname?.message}
                            label="Apellidos"
                        />
                    </Stack>
                    <TextField
                        {...register('userName')}
                        id="username"
                        error={!!errors.userName}
                        helperText={errors.userName?.message}
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
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography color="grey">Dirección</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <AddressForm register={register} errors={errors}></AddressForm>
                        </AccordionDetails>
                    </Accordion>
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
                    Crear cuenta
                </LoadingButton>
            </form>
        </>
    )
}

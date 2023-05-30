import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {
    Alert,
    Checkbox,
    Container,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormHelperText,
    FormLabel,
    InputLabel,
    MenuItem,
    Select,
    Snackbar,
    Stack,
    TextField,
    Typography,
} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import AuthService from '../utils/AuthService'
import Title from '../components/Title'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AllergensList from '../components/preferences/lists/AllergensList'
import AddressForm from '../components/forms/AddressForm'
import { itemSchema } from '../utils/ValidationSchemas'

function AddItem() {
    // ----------- schema validation ----------
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(itemSchema),
    })

    // ----------- control data ----------
    const [loading, setLoading] = useState(false)
    const [snackbar, setSnackbar] = useState(false)
    const [type, setType] = React.useState('')
    const [accessibility, setAccess] = React.useState({
        physical: false,
        visual: false,
        auditory: false,
    })
    const [severity, setSeverity] = useState('error')
    const [formDataPictures, setFormDataPictures] = React.useState({
        thumbnail: null,
        pictures: null,
    })

    const handleThumbnail = (e) => {
        setFormDataPictures((existingValues) => ({
            ...existingValues,
            thumbnail: e.target.files[0],
        }))
    }

    const handlePictures = (e) => {
        setFormDataPictures((existingValues) => ({
            ...existingValues,
            pictures: e.target.files,
        }))
    }

    const handleAccess = (e) => {
        setAccess({
            ...accessibility,
            [e.target.name.substring(14)]: e.target.checked,
        })
    }

    const handleType = (e) => {
        setType(e.target.value)
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setSnackbar(false)
    }

    // ----------- submit function ----------
    const onSubmit = async (data) => {
        setLoading(true)

        const formData = new FormData()
        formData.append('item', new Blob([JSON.stringify(data)], { type: 'application/json' }))
        formData.append('thumbnail', formDataPictures.thumbnail)

        for (let i = 0; i < formDataPictures?.pictures?.length; i++) {
            formData.append('pictures', formDataPictures.pictures[i])
        }

        try {
            const myHeaders = new Headers()
            myHeaders.append('Authorization', AuthService.getJwt())

            const response = await fetch('http://localhost:8080/item', {
                method: 'POST',
                body: formData,
                headers: Object.assign({}, AuthService.getAuthHeader()),
            })

            if (response.status === 200) {
                setLoading(false)
                setSeverity('success')
                setSnackbar(true)
            } else {
                setSeverity('error')
                setSnackbar(true)
                setLoading(false)
            }
        } catch (error) {
            setSeverity('error')
            setSnackbar(true)
            setLoading(false)
        }
    }

    return (
        <>
            <Container maxWidth="sm" sx={{ pt: 4 }}>
                <Title content={'Añadir item'} />
                <form method="post" onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={2.5}>
                        <FormControl fullWidth error={!!errors.type}>
                            <InputLabel id="item-type">Tipo de item *</InputLabel>
                            <Select
                                labelId="item-type"
                                {...register('type')}
                                id="type"
                                value={type}
                                label="Tipo de item *"
                                onChange={handleType}
                            >
                                <MenuItem value={'Place'}>Lugar</MenuItem>
                                <MenuItem value={'Restaurant'}>Restaurante</MenuItem>
                                <MenuItem value={'Business'}>Comercio</MenuItem>
                                <MenuItem value={'Product'}>Producto</MenuItem>
                            </Select>
                            <FormHelperText>{errors.type?.message}</FormHelperText>
                        </FormControl>
                        <TextField
                            {...register('title')}
                            id="title"
                            error={!!errors.title}
                            helperText={errors.title?.message}
                            label="Título *"
                        />
                        <TextField
                            id="description"
                            {...register('description')}
                            label="Descripción *"
                            multiline
                            error={!!errors.description}
                            helperText={errors.description?.description}
                            minRows={2}
                            maxRows={4}
                        />
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography color="grey">Dirección</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <AddressForm register={register} errors={errors}></AddressForm>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography color="grey">Más detalles</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <TextField
                                    {...register('phoneNumber')}
                                    id="phoneNumber"
                                    sx={{ mr: 3 }}
                                    variant="standard"
                                    error={!!errors?.phoneNumber}
                                    helperText={errors.phoneNumber?.message}
                                    label="Número de teléfono"
                                />
                                <TextField
                                    {...register('website')}
                                    id="website"
                                    variant="standard"
                                    error={!!errors?.website}
                                    helperText={errors.website?.message}
                                    label="Página web (con protocolo)"
                                />
                                <TextField
                                    {...register('schedule')}
                                    id="schedule"
                                    fullWidth
                                    variant="standard"
                                    error={!!errors?.schedule}
                                    helperText={errors.schedule?.message}
                                    label="Horario"
                                />
                            </AccordionDetails>
                        </Accordion>
                        {type.match('Restaurant') && (
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography color="grey">El restaurante ofrece comida sin...</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <AllergensList register={register} saved={[]} />
                                </AccordionDetails>
                            </Accordion>
                        )}
                        {type.match(/^(Place|Business|Restaurant)$/) && (
                            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                                <FormLabel component="legend">
                                    Entorno accesible para personas con discapacidad de tipo:{' '}
                                </FormLabel>
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={accessibility.physical}
                                                {...register('accessibility.physical')}
                                                onChange={handleAccess}
                                                name="accessibility.physical"
                                            />
                                        }
                                        label="Física"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={accessibility.visual}
                                                {...register('accessibility.visual')}
                                                onChange={handleAccess}
                                                name="accessibility.visual"
                                            />
                                        }
                                        label="Visual"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={accessibility.auditory}
                                                {...register('accessibility.auditory')}
                                                onChange={handleAccess}
                                                name="accessibility.auditory"
                                            />
                                        }
                                        label="Auditoria"
                                    />
                                </FormGroup>
                            </FormControl>
                        )}
                    </Stack>

                    <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5 }}>
                        Imagen de miniatura *
                    </Typography>
                    <Typography variant="caption" color="secondary">
                        La imagen no puede superar 1MB de tamaño
                    </Typography>
                    <input type="file" onChange={handleThumbnail} />
                    <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5 }}>
                        Imágenes del item *
                    </Typography>
                    <Typography variant="caption" color="secondary">
                        Cada imagen no puede superar 1MB de tamaño
                    </Typography>
                    <input type="file" multiple onChange={handlePictures} />
                    <LoadingButton
                        loading={loading}
                        type="submit"
                        fullWidth
                        size="large"
                        variant="contained"
                        sx={{
                            mt: 4,
                            mb: 10,
                            p: 1.4,
                        }}
                        color="secondary"
                    >
                        Añadir
                    </LoadingButton>
                </form>

                <Snackbar
                    open={snackbar}
                    autoHideDuration={1000}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    {severity === 'error' ? (
                        <Alert onClose={handleClose} severity="error">
                            <Typography variant="caption">Ha ocurrido un error</Typography>
                        </Alert>
                    ) : (
                        <Alert onClose={handleClose} severity="success">
                            <Typography variant="caption">Ha subido el item con éxito</Typography>
                        </Alert>
                    )}
                </Snackbar>
            </Container>
        </>
    )
}

export default AddItem

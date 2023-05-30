import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, IconButton } from '@mui/material'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded'
import AuthService from '../../utils/AuthService'
import { useNavigate } from 'react-router-dom'
import useSWR from 'swr'
import restMethods from '../../utils/RestMethods'

function FavouriteIcon({ itemId }) {
    // ----------- control data ----------
    const navigate = useNavigate()
    const logged = AuthService.isLogged()
    const [openDialog, setOpenDialog] = React.useState(false)
    const handleSave = () => {
        logged ? submit() : setOpenDialog(true)
    }
    const handleCloseDialog = () => setOpenDialog(false)
    const redirect = () => navigate('/login', { replace: true })

    // ----------- server call ----------
    const { data, mutate } = useSWR(
        logged
            ? [`/normal-user/${AuthService.getUserId()}/favourites/${itemId}`, [], AuthService.getAuthHeader()]
            : false,
        ([resource, queryParams, headers]) => restMethods.invokeGET(resource, queryParams, headers)
    )

    // ----------- submit function ----------
    const submit = async () => {
        let response
        if (data === true) {
            response = await restMethods.invokeDELETE(
                `/normal-user/${AuthService.getUserId()}/favourites/${itemId}`,
                AuthService.getAuthHeader()
            )
        } else {
            response = await restMethods.invokePUT(
                `/normal-user/${AuthService.getUserId()}/favourites`,
                itemId,
                AuthService.getAuthHeader()
            )
        }
        if (response.status === 200) await mutate()
    }

    return (
        <>
            <IconButton sx={{ p: 0.4 }} onClick={handleSave}>
                {data ? <FavoriteRoundedIcon sx={{ color: '#e57373' }} /> : <FavoriteBorderRoundedIcon />}
            </IconButton>

            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogContent>
                    <DialogContentText>
                        Debe iniciar sesión o registrarse para poder acceder a todas las funcionalidades
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" onClick={handleCloseDialog}>
                        Cancelar
                    </Button>
                    <Button variant="contained" color="secondary" onClick={redirect}>
                        Iniciar sesión
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default FavouriteIcon

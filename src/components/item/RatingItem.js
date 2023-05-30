import React, { useEffect } from 'react'
import Rating from '@mui/material/Rating'
import { Box, Divider, Stack, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import { useNavigate } from 'react-router-dom'
import useSWR from 'swr'
import restMethods from '../../utils/RestMethods'
import AuthService from '../../utils/AuthService'

function RatingItem({ average, total, itemId, updateItem }) {
    // ----------- server call ----------
    const { data, error, isLoading, mutate } = useSWR(
        [`/item/${itemId}/rating/${AuthService.getUserId()}`, [], AuthService.getAuthHeader()],
        ([resource, queryParams, headers]) => restMethods.invokeGET(resource, queryParams, headers)
    )
    //Update user rating once it is received from the server
    useEffect(() => {
        if (data) setValue(equivalents.indexOf(data) + 1)
    }, [isLoading, error])

    // ----------- control data ----------
    const [value, setValue] = React.useState(0)
    const [hover, setHover] = React.useState(-1)
    const logged = AuthService.isLogged()
    const navigate = useNavigate()
    const labels = {
        1: 'Malo',
        2: 'Regular',
        3: 'Bueno',
        4: 'Muy bueno',
        5: 'Excellente',
    }
    const equivalents = ['VERY_BAD', 'BAD', 'NEUTRAL', 'GOOD', 'EXCELLENT']

    const getLabelText = (value) => {
        return `${value} Stars, ${labels[value]}`
    }
    const handleRating = (event, newValue) => {
        logged ? onSubmit(equivalents.at(newValue - 1), newValue) : navigate('/login', { replace: true })
    }

    // ----------- submit function ----------
    const onSubmit = async (rating, ratingNumber) => {
        let response
        if (data === 'NO_VALUE') {
            response = await restMethods.invokePOST(
                `/item/${itemId}/rating/${AuthService.getUserId()}`,
                rating,
                AuthService.getAuthHeader()
            )
        } else {
            response = await restMethods.invokePUT(
                `/item/${itemId}/rating/${AuthService.getUserId()}`,
                rating,
                AuthService.getAuthHeader()
            )
        }
        if (response.status === 200) {
            setValue(ratingNumber)
            await mutate()
            await updateItem()
        }
    }

    return (
        <Box>
            <Typography variant="h6">Valoraciones</Typography>

            <Divider />
            <Box bgcolor="rgba(0,0,0,0.015)" px={5} pb={4} pt={1} borderRadius="15px">
                <Stack direction="row" alignItems="flex-end" spacing={0.7} my={3}>
                    <StarIcon sx={{ color: '#faaf00' }} fontSize="large" />
                    {average !== null ? (
                        <>
                            <Typography variant="h5">{average.toFixed(2)}</Typography>
                            <Typography variant="subtitle1">({total} valoraciones)</Typography>
                        </>
                    ) : (
                        <Typography variant="subtitle1">No tiene valoraciones todavía</Typography>
                    )}
                </Stack>

                <Typography mb={0.5} mt={3} variant="body2">
                    Dejar una valoracion
                </Typography>

                <Stack direction="row" alignItems="center">
                    <Rating
                        value={value}
                        size="large"
                        getLabelText={getLabelText}
                        onChange={handleRating}
                        onChangeActive={(e, newHover) => {
                            setHover(newHover)
                        }}
                    />
                    {value !== 0 && <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>}
                </Stack>
            </Box>
        </Box>
    )
}

export default RatingItem

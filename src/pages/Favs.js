import React from 'react'
import ItemsList from '../components/itemsList/ItemsList'
import { Box, LinearProgress, Typography } from '@mui/material'
import Title from '../components/Title'
import useSWR from 'swr'
import restMethods from '../utils/RestMethods'
import AuthService from '../utils/AuthService'

function Favs() {
    // ----------- server call ----------
    const { data, error, isLoading } = useSWR(
        [`/normal-user/${AuthService.getUserId()}/favourites`, [], AuthService.getAuthHeader()],
        ([resource, queryParams, headers]) => restMethods.invokeGET(resource, queryParams, headers)
    )

    return (
        <Box px={{ xs: 1.2, md: 7 }} py={4}>
            <Title content={'Favoritos'} />

            {isLoading ? (
                <LinearProgress />
            ) : error ? (
                <Typography color="error">Ha ocurrido un error: {error.toString()}</Typography>
            ) : (
                <ItemsList items={data} />
            )}
        </Box>
    )
}

export default Favs

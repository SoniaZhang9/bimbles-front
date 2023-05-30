import React from 'react'
import useSWR from 'swr'
import AuthService from '../utils/AuthService'
import restMethods from '../utils/RestMethods'
import { Box, LinearProgress, Typography } from '@mui/material'
import Title from '../components/Title'
import ItemsList from '../components/itemsList/ItemsList'

function ReviewItems() {
    // ----------- server call ----------
    const { data, error, isLoading, mutate } = useSWR(
        [`/item-review`, [], AuthService.getAuthHeader()],
        ([resource, queryParams, headers]) => restMethods.invokeGET(resource, queryParams, headers)
    )
    return (
        <Box px={{ xs: 1.2, md: 7 }} py={4}>
            <Title content={'Items en revisión'} />

            {isLoading ? (
                <LinearProgress />
            ) : error ? (
                <Typography color="error">Ha ocurrido un error: {error.toString()}</Typography>
            ) : (
                <ItemsList items={data} mutate={mutate} />
            )}
        </Box>
    )
}

export default ReviewItems

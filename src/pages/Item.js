import React from 'react'
import ImageSlider from '../components/item/ImageSlider'
import { Box, Button, Card, Chip, Grid, LinearProgress, Stack, Typography } from '@mui/material'
import AllergensInformation from '../components/item/AllergensInformation'
import AccessibilityInformation from '../components/item/AccessibilityInformation'
import ItemTitle from '../components/item/ItemTitle'
import ContactInformation from '../components/item/ContactInformation'
import RatingItem from '../components/item/RatingItem'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { useNavigate, useParams } from 'react-router-dom'
import useSWR from 'swr'
import AuthService from '../utils/AuthService'
import restMethods from '../utils/RestMethods'

function Item() {
    // ----------- control data ----------
    const navigate = useNavigate()
    let { id } = useParams()
    function getItemType(type) {
        switch (type) {
            case 'Restaurant':
                return <Chip label="Restaurante" variant="restaurant" />
            case 'Place':
                return <Chip label="Lugar" variant="place" />
            case 'Business':
                return <Chip label="Comercio" variant="business" />
            case 'Product':
                return <Chip label="Producto" variant="product" />
            default:
                break
        }
    }

    // ----------- server call ----------
    const { data, error, isLoading, mutate } = useSWR(
        [`/item/${id}`, [], AuthService.getAuthHeader()],
        ([resource, queryParams, headers]) => restMethods.invokeGET(resource, queryParams, headers)
    )

    return (
        <>
            {isLoading ? (
                <LinearProgress />
            ) : error ? (
                <Typography color="error">Ha ocurrido un error: {error.toString()}</Typography>
            ) : (
                <Box
                    sx={{
                        backgroundColor: 'rgb(255, 241, 202)',
                        p: 0,
                        pb: 5,
                    }}
                >
                    <Button
                        sx={{ ml: { xs: 1, md: 4 }, mt: 3, mb: 2 }}
                        onClick={() => navigate(-1)}
                        size="small"
                        color="primary"
                        variant="contained"
                    >
                        <ArrowBackIosIcon /> Volver
                    </Button>

                    <Card sx={{ p: { xs: 3, md: 5 }, mx: { xs: 0, md: 12 }, mt: 1 }}>
                        <Grid container spacing={2} columnSpacing={6}>
                            <Grid item xs={12} md={5}>
                                <Stack direction="column" spacing={2} alignItems="flex-start">
                                    {getItemType(data.type)}
                                    <ItemTitle item={data} />
                                    <Typography variant="body1">{data.description}</Typography>
                                    {data.type === 'Restaurant' && <AllergensInformation item={data} />}
                                    {data.type !== 'Product' && (
                                        <AccessibilityInformation access={data.accessibility} />
                                    )}
                                </Stack>
                            </Grid>

                            <Grid item xs={12} md={7}>
                                <ImageSlider pictures={data.pictures} />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <RatingItem
                                    average={data.averageRating}
                                    total={data.ntotalRating}
                                    itemId={data.id}
                                    updateItem={mutate}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <ContactInformation item={data} />
                            </Grid>
                        </Grid>
                    </Card>
                </Box>
            )}
        </>
    )
}

export default Item

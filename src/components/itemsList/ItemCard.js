import React, { useEffect } from 'react'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import PlaceIcon from '@mui/icons-material/Place'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import FavouriteIcon from './FavouriteIcon'
import formatMethods from '../../utils/FormatMethods'
import AuthService from '../../utils/AuthService'
import ReviewButtons from './ReviewButtons'

function ItemCard({ item, mutate }) {
    const imageData = item.thumbnail.imgByte
    const imageType = item.thumbnail.type
    const isAdmin = AuthService.getUserRole() === 'ADMIN'
    const [displayReviewButtons, setDisplayReviewButtons] = React.useState(false)
    const urlLocation = useLocation()
    useEffect(() => {
        if (urlLocation.pathname === '/dashboard/review') setDisplayReviewButtons(true)
    }, [urlLocation.pathname])

    return (
        <Card sx={{ width: '100%', borderRadius: '20px' }} elevation={0}>
            {/* Miniature */}
            <Box position="relative">
                <CardMedia
                    component="img"
                    height="230"
                    image={`data:${imageType};base64,${imageData}`}
                    alt={`${item.thumbnail.name}`}
                />
            </Box>
            <CardContent sx={{ pb: 0 }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    {/* Title */}
                    <Typography variant="h2" component="h1">
                        {item.title}
                    </Typography>

                    {/* Total valoration and heart icon */}
                    <Stack direction="row" spacing={2}>
                        <Stack color="text.secondary" direction="row" alignItems="Center">
                            {item.averageRating !== null && (
                                <>
                                    <StarRoundedIcon sx={{ fontSize: '1rem' }} />
                                    <Typography variant="body1" ml={0.4}>
                                        {item?.averageRating?.toFixed(2)}
                                    </Typography>
                                </>
                            )}
                        </Stack>
                        {!isAdmin && <FavouriteIcon itemId={item.id} />}
                    </Stack>
                </Box>

                {/* Ubication */}
                <Box
                    sx={{
                        display: 'flex',
                        fontSize: '0.95rem',
                        alignItems: 'center',
                        fontFamily: "'Roboto', sans-serif",
                        mt: 0.3,
                    }}
                    color="text.secondary"
                >
                    {item.address && <PlaceIcon sx={{ fontSize: '1.1rem' }} />}
                    <Typography variant="subtitle1">
                        &nbsp;
                        {formatMethods.formatAddress(item)}
                    </Typography>
                </Box>
            </CardContent>
            {/* See more button */}
            <CardActions sx={{ justifyContent: 'center', p: 1 }}>
                <Button
                    component={RouterLink}
                    to={AuthService.isLogged() ? `/dashboard/item/${item.id}` : `item/${item.id}`}
                    path="relative"
                    size="small"
                    color="secondary"
                >
                    Ver más
                </Button>
            </CardActions>
            {displayReviewButtons && <ReviewButtons itemId={item.id} mutate={mutate} />}
        </Card>
    )
}

export default ItemCard

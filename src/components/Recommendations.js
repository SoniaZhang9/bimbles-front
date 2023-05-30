import React, { useEffect } from 'react'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Fab, LinearProgress, Switch, Tab, Typography } from '@mui/material'
import RestaurantTwoToneIcon from '@mui/icons-material/RestaurantTwoTone'
import BeachAccessOutlinedIcon from '@mui/icons-material/BeachAccessOutlined'
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined'
import SellOutlinedIcon from '@mui/icons-material/SellOutlined'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined'
import ItemsList from './itemsList/ItemsList'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import formatMethods from '../utils/FormatMethods'
import FormControlLabel from '@mui/material/FormControlLabel'
import AuthService from '../utils/AuthService'

function Recommendations({ data, error, isLoading, refined, setRefined }) {
    // ----------- control data ----------
    const [tabValue, setTabValue] = React.useState('1')
    const [displaySeeMoreButton, setDisplaySeeMoreButton] = React.useState(true)
    const [items, setItems] = React.useState(null)
    const urlLocation = useLocation()

    const handleTabChange = (e, newValue) => {
        setTabValue(newValue)
    }

    const handleSwitchChange = () => {
        setRefined(!refined)
    }

    useEffect(() => {
        if (isLoading === false && data) setItems(formatMethods.divideItemsByType(data))
    }, [data, isLoading])

    useEffect(() => {
        if (urlLocation.pathname === '/dashboard') setDisplaySeeMoreButton(false)
    }, [urlLocation.pathname])

    return (
        <TabContext value={tabValue}>
            <Box
                sx={{
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    bgcolor: 'background.paper',
                    borderBottom: 1,
                    borderColor: 'divider',
                    zIndex: 999,
                }}
            >
                <TabList
                    sx={{
                        pt: 2,
                    }}
                    value={tabValue}
                    onChange={handleTabChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                >
                    <Tab label="Restaurantes" value="1" icon={<RestaurantTwoToneIcon />} />
                    <Tab label="Lugares" value="2" icon={<BeachAccessOutlinedIcon />} />
                    <Tab label="Comercios" value="3" icon={<LocalGroceryStoreOutlinedIcon />} />
                    <Tab label="Productos" value="4" icon={<SellOutlinedIcon />} />
                </TabList>
                {!displaySeeMoreButton && AuthService.getUserRole() === 'NORMAL' && (
                    <FormControlLabel
                        control={<Switch onChange={handleSwitchChange} />}
                        label="Mejorar recomendaciones"
                    />
                )}
            </Box>
            <Box pt={4} pb={10}>
                {isLoading ? (
                    <LinearProgress color="primary" />
                ) : error ? (
                    <Typography color="error">Ha ocurrido un error: {error.toString()}</Typography>
                ) : (
                    <>
                        <TabPanel value="1" index={1}>
                            {items !== null && <ItemsList items={items.restaurants} />}
                        </TabPanel>
                        <TabPanel value="2" index={2} path={'item'}>
                            {items !== null && <ItemsList items={items.places} />}
                        </TabPanel>
                        <TabPanel value="3" index={3} path={'item'}>
                            {items !== null && <ItemsList items={items.businesses} />}
                        </TabPanel>
                        <TabPanel value="4" index={4} path={'item'}>
                            {items !== null && <ItemsList items={items.products} />}
                        </TabPanel>
                        {displaySeeMoreButton && (
                            <Fab
                                color="primary"
                                component={RouterLink}
                                to="/register"
                                variant="extended"
                                size="large"
                                sx={{
                                    color: 'white',
                                    position: 'absolute',
                                    mr: 10,
                                    right: '5em',
                                }}
                            >
                                <ArrowForwardOutlinedIcon />
                                Ver más
                            </Fab>
                        )}
                    </>
                )}
            </Box>
        </TabContext>
    )
}

export default Recommendations

import React, { useState } from 'react'
import {
    Box,
    Checkbox,
    Container,
    LinearProgress,
    Snackbar,
    Tab,
    Tooltip,
    Typography,
    useMediaQuery,
} from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import NoFoodTwoToneIcon from '@mui/icons-material/NoFoodTwoTone'
import SetMealTwoToneIcon from '@mui/icons-material/SetMealTwoTone'
import AccessibleTwoToneIcon from '@mui/icons-material/AccessibleTwoTone'
import AllergensList from './lists/AllergensList'
import DietsList from './lists/DietsList'
import SpecialNeedsList from './lists/SpecialNeedsList'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import InfoRoundedIcon from '@mui/icons-material/InfoRounded'
import { useFieldArray, useForm } from 'react-hook-form'
import AuthService from '../../utils/AuthService'
import useSWR from 'swr'
import restMethods from '../../utils/RestMethods'
import { theme } from '../../theme/theme'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import { preferencesSchema } from '../../utils/ValidationSchemas'
import LButton from './LButton'

function PreferencesSelection({ newUser }) {
    // ----------- server call ----------
    const { data, error, isLoading, mutate } = useSWR(`/preferences/${AuthService.getUserId()}`, restMethods.invokeGET)

    // ----------- control data ----------
    const mobileScreen = useMediaQuery(theme.breakpoints.down('sm'))
    const [value, setValue] = React.useState('2') //tabValue
    const [enableInfo, setEnableInfo] = React.useState(false)
    const [buttonLoading, setButtonLoading] = useState(false)
    const [openAlert, setOpenAlert] = React.useState(false)
    const handleAlertClose = () => {
        setOpenAlert(false)
    }
    const handleChange = (e, newValue) => {
        setValue(newValue)
    }

    // ----------- schema validation ----------
    const { register, handleSubmit, control } = useForm({ resolver: yupResolver(preferencesSchema) })
    useFieldArray({ name: 'diets', control })
    useFieldArray({ name: 'allergies', control })
    useFieldArray({ name: 'specialNeeds', control })

    // ----------- submit function ----------
    const onSubmit = async (data) => {
        setButtonLoading(true)

        try {
            const response = await restMethods.invokePUT(
                `/preferences/${AuthService.getUserId()}`,
                data,
                AuthService.getAuthHeader()
            )
            if (response.status === 200) {
                setButtonLoading(false)
                await mutate()
                setOpenAlert(true)
            }
        } catch (error) {
            console.log(error)
            setButtonLoading(false)
        }
    }

    return (
        <>
            <form method="post" onSubmit={handleSubmit(onSubmit)}>
                <Container
                    sx={{
                        bgcolor: 'background.paper',
                        borderRadius: '10px',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    {!mobileScreen ? (
                        <Tooltip title="Pulsa para ver más información">
                            <Checkbox
                                sx={{
                                    position: 'absolute',
                                    right: { md: 12 },
                                    left: { xs: 0.1, md: 'unset' },
                                    top: 5,
                                    fontWeight: '400',
                                }}
                                checked={enableInfo}
                                onChange={(event) => setEnableInfo(event.target.checked)}
                                icon={<InfoOutlinedIcon sx={{ fontSize: 30 }} />}
                                checkedIcon={<InfoRoundedIcon sx={{ fontSize: 30 }} />}
                            />
                        </Tooltip>
                    ) : (
                        ''
                    )}

                    <TabContext value={value}>
                        <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                bgcolor: 'background.paper',
                                borderBottom: 1,
                                borderColor: 'divider',
                            }}
                        >
                            <TabList
                                value={value}
                                onChange={handleChange}
                                variant="scrollable"
                                scrollButtons
                                allowScrollButtonsMobile
                            >
                                <Tab label="Dietas especiales" value="1" icon={<SetMealTwoToneIcon />} />
                                <Tab label="Alergias alimentarias" value="2" icon={<NoFoodTwoToneIcon />} />
                                <Tab label="Necesidades especiales" value="3" icon={<AccessibleTwoToneIcon />} />
                            </TabList>
                        </Box>

                        {isLoading ? (
                            <LinearProgress />
                        ) : error ? (
                            <Typography color="error">Ha ocurrido un error: {error.toString()}</Typography>
                        ) : (
                            <Box
                                sx={{
                                    display: 'flex',
                                }}
                            >
                                <TabPanel value="1" index={1}>
                                    <DietsList info={enableInfo} register={register} saved={data?.preferences?.diets} />
                                    <LButton loading={buttonLoading} newUser={newUser} type={'dietas'}></LButton>
                                </TabPanel>
                                <TabPanel value="2" index={2}>
                                    <AllergensList
                                        info={enableInfo}
                                        register={register}
                                        saved={data?.preferences?.allergies}
                                    />
                                    <LButton loading={buttonLoading} newUser={newUser} type={'alergias'}></LButton>
                                </TabPanel>
                                <TabPanel sx={{ maxHeight: '80vh' }} value="3" index={3}>
                                    <SpecialNeedsList
                                        info={enableInfo}
                                        register={register}
                                        saved={data?.preferences?.specialNeeds}
                                    />
                                    <LButton
                                        loading={buttonLoading}
                                        type={'necesidades especiales'}
                                        newUser={newUser}
                                    ></LButton>
                                </TabPanel>
                            </Box>
                        )}
                    </TabContext>
                </Container>

                <Snackbar
                    open={openAlert}
                    autoHideDuration={3000}
                    onClose={handleAlertClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    message={'Guardado'}
                ></Snackbar>
            </form>
        </>
    )
}

export default PreferencesSelection

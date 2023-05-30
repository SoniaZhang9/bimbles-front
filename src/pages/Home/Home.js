import React from 'react'
import './Home.css'
import Earth from '../../assets/illustrations/earth.svg'
import Plants from '../../assets/illustrations/plants.svg'
import { Box, Button, Divider, Typography } from '@mui/material'
import Typewriter from 'typewriter-effect'
import Recommendations from '../../components/Recommendations'
import { Link } from 'react-router-dom'
import useSWR from 'swr'
import restMethods from '../../utils/RestMethods'

function Home() {
    // ----------- server call ----------
    const { data, error, isLoading } = useSWR('/item', restMethods.invokeGET)

    return (
        <>
            <section id="welcome">
                <div className="light-background"></div>
                <img className="main-img" src={Earth} alt="earth" />
                <Box
                    component="header"
                    className="bienvenida"
                    sx={{
                        fontSize: { xs: '30px', xl: '40px' },
                    }}
                >
                    <Typography variant="h1">
                        Encuentra el
                        <Typewriter
                            options={{ loop: true }}
                            onInit={(typewriter) =>
                                typewriter
                                    .typeString('restaurante')
                                    .pauseFor(1200)
                                    .deleteAll()
                                    .typeString('comercio')
                                    .pauseFor(1200)
                                    .deleteAll()
                                    .typeString('producto')
                                    .pauseFor(1200)
                                    .deleteAll()
                                    .typeString('lugar')
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .start()
                            }
                        />
                        que mejor se adapta a tus necesidades
                    </Typography>
                    <Button
                        component={Link}
                        to="/register"
                        variant="contained"
                        color="secondary"
                        size="large"
                        sx={{
                            mt: { xs: 2.3, xl: 0.8 },
                            fontWeight: 800,
                            position: 'absolute',
                            right: '13%',
                            color: '#fff',
                            fontSize: { xs: '21px', xl: '24px' },
                        }}
                    >
                        Empieza ahora
                    </Button>
                </Box>
            </section>
            <Divider />
            <section id="recomendations">
                <Recommendations data={data} error={error} isLoading={isLoading} />
            </section>
            <section id="final">
                <img className="plants-img" src={Plants} alt="plants" />
                <Typography
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    variant="h4"
                >
                    Regístrate para poder acceder a todas la funcionalidades
                    <Button
                        component={Link}
                        to="/register"
                        sx={{
                            mt: 2.5,
                        }}
                        color="lightOrange"
                        size="large"
                        variant="contained"
                    >
                        Registrarse
                    </Button>
                </Typography>
            </section>
        </>
    )
}

export default Home

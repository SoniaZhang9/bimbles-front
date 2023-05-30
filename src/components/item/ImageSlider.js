import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MobileStepper from '@mui/material/MobileStepper'
import Button from '@mui/material/Button'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

function ImageSlider({ pictures }) {
    const theme = useTheme()
    const [activeStep, setActiveStep] = React.useState(0)
    const maxSteps = pictures.length
    const maxWidth = theme.breakpoints.values.md

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    const handleStepChange = (step) => {
        setActiveStep(step)
    }

    return (
        <Box sx={{ maxWidth: { maxWidth }, flexGrow: 1 }} mt={{ xs: 2.5, md: 0 }}>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {pictures.map((step, index) => (
                    <div key={step.name}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    maxHeight: 555,
                                    display: 'block',
                                    maxWidth: { maxWidth },
                                    overflow: 'hidden',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '16px',
                                }}
                                src={`data:${step.type};base64,${step.imgByte}`}
                                alt={step.name}
                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>

            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        Siguiente
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        Atrás
                    </Button>
                }
            />
        </Box>
    )
}

export default ImageSlider

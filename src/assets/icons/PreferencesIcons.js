import React from 'react'
import { Icon } from '@mui/material'
import egg from './allergens/egg.svg'
import celery from './allergens/celery.svg'
import crustacean from './allergens/crustacean.svg'
import fish from './allergens/fish.svg'
import gluten from './allergens/gluten.svg'
import lupins from './allergens/lupins.svg'
import milk from './allergens/milk.svg'
import mustard from './allergens/mustard.svg'
import nuts from './allergens/nuts.svg'
import peanuts from './allergens/peanuts.svg'
import sesame from './allergens/sesame.svg'
import shellfish from './allergens/shellfish.svg'
import soy from './allergens/soy.svg'
import sulfites from './allergens/sulfites.svg'
import glutenfree from './diets/glutenfree.svg'
import vegetarian from './diets/vegetarian.svg'
import vegan from './diets/vegan.svg'
import adhd from './special-needs/adhd.svg'
import autism from './special-needs/autism.svg'
import behavior from './special-needs/behavior.svg'
import blind from './special-needs/blind.svg'
import communication from './special-needs/communication.svg'
import deaf from './special-needs/deaf.svg'
import development from './special-needs/development.svg'
import intellectual from './special-needs/intellectual.svg'
import disease from './special-needs/disease.svg'
import wheelchair from './special-needs/wheelchair.svg'

const fontSize = 55
const fontSizeSpecialeNeeds = 37

export const AdhdIcon = () => (
    <Icon sx={{ fontSize: fontSizeSpecialeNeeds }}>
        <img src={adhd} alt="adhdIcon" />
    </Icon>
)
export const AutismIcon = () => (
    <Icon sx={{ fontSize: fontSizeSpecialeNeeds }}>
        <img src={autism} alt="autismIcon" />
    </Icon>
)
export const BehaviorIcon = () => (
    <Icon sx={{ fontSize: fontSizeSpecialeNeeds }}>
        <img src={behavior} alt="behaviorIcon" />
    </Icon>
)
export const BlindIcon = () => (
    <Icon sx={{ fontSize: fontSizeSpecialeNeeds }}>
        <img src={blind} alt="blindIcon" />
    </Icon>
)
export const CommunicationIcon = () => (
    <Icon sx={{ fontSize: fontSizeSpecialeNeeds }}>
        <img src={communication} alt="communicationIcon" />
    </Icon>
)
export const DeafIcon = () => (
    <Icon sx={{ fontSize: fontSizeSpecialeNeeds }}>
        <img src={deaf} alt="deafIcon" />
    </Icon>
)
export const DevelopmentIcon = () => (
    <Icon sx={{ fontSize: fontSizeSpecialeNeeds }}>
        <img src={development} alt="developmentIcon" />
    </Icon>
)
export const IntellectualIcon = () => (
    <Icon sx={{ fontSize: fontSizeSpecialeNeeds }}>
        <img src={intellectual} alt="intellectualIcon" />
    </Icon>
)
export const DiseaseIcon = () => (
    <Icon sx={{ fontSize: fontSizeSpecialeNeeds }}>
        <img src={disease} alt="diseaseIcon" />
    </Icon>
)
export const WheelchairIcon = () => (
    <Icon sx={{ fontSize: fontSizeSpecialeNeeds }}>
        <img src={wheelchair} alt="wheelchairIcon" />
    </Icon>
)

export const GlutenFreeIcon = () => (
    <Icon sx={{ fontSize: fontSize }}>
        <img src={glutenfree} alt="glutenFreeIcon" />
    </Icon>
)

export const VegetarianIcon = () => (
    <Icon sx={{ fontSize: fontSize }}>
        <img src={vegetarian} alt="vegetarianIcon" />
    </Icon>
)

export const VeganIcon = () => (
    <Icon sx={{ fontSize: fontSize }}>
        <img src={vegan} alt="veganIcon" />
    </Icon>
)

export function FishIcon(props) {
    return (
        <Icon sx={{ fontSize: props.size }}>
            <img src={fish} alt="fishIcon" />
        </Icon>
    )
}

export function CrustaceanIcon(props) {
    return (
        <Icon sx={{ fontSize: props.size }}>
            <img src={crustacean} alt="crustaceanIcon" />
        </Icon>
    )
}

export function CeleryIcon(props) {
    return (
        <Icon sx={{ fontSize: props.size }}>
            <img src={celery} alt="celeryIcon" />
        </Icon>
    )
}

export function EggIcon(props) {
    return (
        <Icon sx={{ fontSize: props.size }}>
            <img src={egg} alt="eggIcon" />
        </Icon>
    )
}

export function GlutenIcon(props) {
    return (
        <Icon sx={{ fontSize: props.size }}>
            <img src={gluten} alt="glutenIcon" />
        </Icon>
    )
}

export function MilkIcon(props) {
    return (
        <Icon sx={{ fontSize: props.size }}>
            <img src={milk} alt="milkIcon" />
        </Icon>
    )
}

export function MustardIcon(props) {
    return (
        <Icon sx={{ fontSize: props.size }}>
            <img src={mustard} alt="mustardIcon" />
        </Icon>
    )
}

export function NutsIcon(props) {
    return (
        <Icon sx={{ fontSize: props.size }}>
            <img src={nuts} alt="nutsIcon" />
        </Icon>
    )
}

export function PeanutsIcon(props) {
    return (
        <Icon sx={{ fontSize: props.size }}>
            <img src={peanuts} alt="peanutsIcon" />
        </Icon>
    )
}

export function SesameIcon(props) {
    return (
        <Icon sx={{ fontSize: props.size }}>
            <img src={sesame} alt="sesameIcon" />
        </Icon>
    )
}

export function ShellfishIcon(props) {
    return (
        <Icon sx={{ fontSize: props.size }}>
            <img src={shellfish} alt="shellfishIcon" />
        </Icon>
    )
}

export function SoyIcon(props) {
    return (
        <Icon sx={{ fontSize: props.size }}>
            <img src={soy} alt="soyIcon" />
        </Icon>
    )
}

export function SulfitesIcon(props) {
    return (
        <Icon sx={{ fontSize: props.size }}>
            <img src={sulfites} alt="sulfitesIcon" />
        </Icon>
    )
}

export function LupinsIcon(props) {
    return (
        <Icon sx={{ fontSize: props.size }}>
            <img src={lupins} alt="lupinsIcon" />
        </Icon>
    )
}

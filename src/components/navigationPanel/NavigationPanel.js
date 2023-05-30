import React from 'react'
import NormalNavigation from './NormalNavigation'
import MobileNavigation from './MobileNavigation'

function NavigationPanel(props) {
    return (
        <>
            <NormalNavigation {...props} />
            <MobileNavigation />
        </>
    )
}

export default NavigationPanel

import { Outlet } from 'react-router'
import Navbar from '../components/topNavbar/Navbar'

const UnloggedLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default UnloggedLayout

import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard'
import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import UnloggedLayout from './layout/UnloggedLayout'
import AuthenticationLayout from './layout/AuthenticationLayout'
import LoggedLayout from './layout/LoggedLayout'
import Favs from './pages/Favs'
import Item from './pages/Item'
import { Toolbar } from '@mui/material'
import UnloggedRedirectionRoute from './components/redirection/UnloggedRedirectionRoute'
import LoggedRedirectionRoute from './components/redirection/LoggedRedirectionRoute'
import User from './pages/User'
import Preferences from './pages/Preferences'
import AddItem from './pages/AddItem'
import ReviewItems from './pages/ReviewItems'

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <LoggedRedirectionRoute>
                <UnloggedLayout />
            </LoggedRedirectionRoute>
        ),
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'item/:id',
                element: (
                    <>
                        <Toolbar />
                        <Item />
                    </>
                ),
            },
        ],
    },
    {
        path: '/',
        element: (
            <LoggedRedirectionRoute>
                <AuthenticationLayout />
            </LoggedRedirectionRoute>
        ),
        children: [
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
        ],
    },
    {
        path: '/dashboard',
        element: (
            <UnloggedRedirectionRoute>
                <LoggedLayout />
            </UnloggedRedirectionRoute>
        ),
        children: [
            {
                path: '',
                element: <Dashboard />,
            },
            {
                path: 'favs',
                element: <Favs />,
            },
            {
                path: 'preferences',
                element: <Preferences />,
            },
            {
                path: 'user',
                element: <User />,
            },
            {
                path: 'item/:id',
                element: <Item />,
            },
            {
                path: 'add-item',
                element: <AddItem />,
            },
            {
                path: 'review',
                element: <ReviewItems />,
            },
        ],
    },
])

function App() {
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    )
}

export default App

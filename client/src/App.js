import React from 'react'
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import { Register } from './components/Register'
import { Reset } from './components/Reset'
import { Username } from './components/Username'
import { Recovery } from './components/Recovery'
import { Password } from './components/Password'
import { PageNotFound } from './components/PageNotFound'

//root routes
 const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Root Route</div>
    },
    {
        path: "/reset",
        element: <Reset></Reset>
    },
    {
        path: "/register",
        element: <Register></Register>
    },
    {
        path: "/username",
        element: <Username></Username>
    },
    {
        path: "/recovery",
        element: <Recovery></Recovery>
    },
    {
        path: "/password",
        element: <Password></Password>
    },
    {
        path: "/pagenotfound",
        element: <PageNotFound></PageNotFound>
    }
 ])

export const App = () => {
  return (
    <main>
        <RouterProvider router={router}></RouterProvider>
    </main>
  )
}

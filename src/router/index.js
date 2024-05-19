import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../components/Home'
import NotFoundPage from '../components/NotFoundPage'
import Layout from '../layout'
import Quiz from '../components/Quiz/Quiz'


const router = createBrowserRouter([
  {
    id: "AppLayout",
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        id: "home",
        path: `/`,
        element: <Home />,
      },
      {
        id: "quiz",
        path: `/quiz`,
        element: <Quiz />,
      },
    ]
  },
])


export default router


import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route, Navigate } from 'react-router-dom'

// ROTAS - Página Inicial

import Home from './src/pages/home/Home'
import SobreNos from './src/pages/aboutUs/SobreNos'

import { PageProvider } from './src/data/hooks/context/PageContext'

import '../VHL/src/ui/styles/global.css'
import '../VHL/src/pages/home/carousel.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/sobre-nos',
    element: <SobreNos />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PageProvider>
      <RouterProvider router={router} />
    </PageProvider>
  </React.StrictMode>,
)

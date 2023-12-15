import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route, Navigate } from 'react-router-dom'

// ROTAS - Página Inicial

import Home from './src/pages/home/Home'

import { PageProvider } from './src/data/hooks/context/PageContext'

import '../VHL/src/ui/styles/global.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PageProvider>
      <RouterProvider router={router} />
    </PageProvider>
  </React.StrictMode>,
)

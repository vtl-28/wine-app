import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'
import ErrorPage from './error_page.jsx'
import LoginPage from './Pages/Login/index.jsx'
import LandingPage from './Pages/Landing Page/index.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
  </React.StrictMode>,
)

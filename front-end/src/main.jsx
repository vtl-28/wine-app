import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorPage from './error_page.jsx'
import LoginPage from './Pages/Login/index.jsx'
import LandingPage from './Pages/LandingPage/index.jsx'
import UpdateWine from './Pages/UpdateWine/index.jsx';
import './index.css'
import './fonts.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/landing_page",
    element: <LandingPage />,
  },
  {
    path: "/update_wine",
    element: <UpdateWine />,
  }
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)

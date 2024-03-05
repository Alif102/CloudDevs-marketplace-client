import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'
import AuthProviders from './Provider/AuthProvider'
import { HelmetProvider } from 'react-helmet-async';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
  <AuthProviders>
  <HelmetProvider>
  <RouterProvider router={router}></RouterProvider>
  </HelmetProvider>
 
 
  </AuthProviders>
 <ToastContainer/>
  </React.StrictMode>,
)
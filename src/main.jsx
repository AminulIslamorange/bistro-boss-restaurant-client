import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './provider/AuthProvider.jsx';
import { QueryClient,QueryClientProvider} from '@tanstack/react-query'


const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-screen-xl mx-auto'>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <HelmetProvider>
            <RouterProvider router={router} />
          </HelmetProvider>
        </AuthProvider>
      </QueryClientProvider>

    </div>
  </StrictMode>,
)

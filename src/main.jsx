import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; 
import './index.css'
import App from './App.jsx'

// Dynamic import Analytics dengan fallback jika gagal load
const Analytics = lazy(() => 
  import('@vercel/analytics/react')
    .then(module => ({ default: module.Analytics }))
    .catch(() => ({ default: () => null }))
);

createRoot(document.getElementById('root')).render(
  <BrowserRouter> 
      <App />
      <Suspense fallback={null}>
        <Analytics />
      </Suspense>
    </BrowserRouter>,
)

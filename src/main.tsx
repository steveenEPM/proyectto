import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes.tsx'

import './styles/index.css'
import './styles/screens.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

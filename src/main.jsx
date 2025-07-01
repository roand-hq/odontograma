import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Odontograma from './Odontograma.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Odontograma />
  </StrictMode>,
)

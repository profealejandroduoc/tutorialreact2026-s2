import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MiAplicacion } from './pages/MiAplicacion'
import { OtroComponente } from './pages/OtroComponente'





createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MiAplicacion></MiAplicacion>
    <OtroComponente />
  </StrictMode>,
)

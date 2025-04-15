import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EnterSiteForm from "./EnterSiteForm.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <EnterSiteForm />
  </StrictMode>,
)



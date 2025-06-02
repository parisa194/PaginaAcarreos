import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ButtonMenu from './assets/buttonMenu.jsx';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ButtonMenu />
    <App />

  </StrictMode>,
)



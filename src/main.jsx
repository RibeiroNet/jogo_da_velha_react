import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// cria a raiz da aplicação 
const root = createRoot(document.getElementById('root'))
// renderiza o componente app 
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useWeb3, Web3Provider } from './Web3Provider'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Web3Provider>
      <App />
    </Web3Provider>
  </StrictMode>,
)

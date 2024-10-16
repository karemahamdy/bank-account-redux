import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Store from "./Store.js"

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <Provider Store={Store}>
    <App />
        </Provider>
  </StrictMode>,
)

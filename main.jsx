// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/index'
import App from './App'
import './styles/globals.css'

/**
 * Application entry point.
 * Wraps App in:
 * - React.StrictMode (development checks)
 * - Redux Provider (global state)
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)

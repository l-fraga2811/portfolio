/**
 * @copyright 2024 DevFraga
 * @license Apache-2.0
 */

/****************
 * NODE MODULES *
 ****************/
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/**************
 * COMPONENTS *
 **************/
import App from './App.jsx'

/**********
 * STYLES *
 **********/
import './index.css'
import 'lenis/dist/lenis.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

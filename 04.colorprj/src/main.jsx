import { StrictMode } from 'react'
import tailwindConfig from '../tailwind.config.js'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(<App />
)

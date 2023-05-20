import React from 'react'
import ReactDOM from 'react-dom/client'
<<<<<<< HEAD
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
=======
import { BrowserRouter } from 'react-router-dom'
import { HarmonyHouse } from './HarmonyHouse';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HarmonyHouse/>
    </BrowserRouter>
  </React.StrictMode>
>>>>>>> Ahernandez-2018417
)

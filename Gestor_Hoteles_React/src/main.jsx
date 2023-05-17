import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HarmonyHouse } from './HarmonyHouse';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HarmonyHouse/>
    </BrowserRouter>
  </React.StrictMode>
)

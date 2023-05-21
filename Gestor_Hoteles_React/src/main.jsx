<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom/client'
import MenuHotel from './MenuHotel'
import './index.css'
import Hotel from './hotel/components/Hotel'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hotel/>
    {/* <MenuHotel/> */}
  </React.StrictMode>
)
=======
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
>>>>>>> 6a87b86baa9ab7ad60f3301fa59b4b7321c11ca8

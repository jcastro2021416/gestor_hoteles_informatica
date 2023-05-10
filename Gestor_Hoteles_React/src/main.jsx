import React from 'react'
import ReactDOM from 'react-dom/client'
import MenuHotel from './MenuHotel'
import Hotel from './hotel/components/Hotel'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hotel/>
    {/* <MenuHotel/> */}
  </React.StrictMode>
)

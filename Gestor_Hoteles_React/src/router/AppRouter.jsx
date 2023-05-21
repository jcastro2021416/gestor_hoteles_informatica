import {Navigate,Route,Routes} from "react-router-dom";

import { HotelPages,Habitaciones, UsuarioHotel, ServiciosHotel,Factura } from "../hotel";
import { LoginHotel } from "../auth";
import { NavBar } from "../navbar";
import { Recerva } from "../hotel/pages/Recerva";

export const AppRouter = () => {
  return (
    <>
    {/* {isUserAuthenticated() &&<NavBar></NavBar>} */}
    
      
    <NavBar/>
    <Routes>
    <Route path="habitaciones" element={<Habitaciones/>} />

        <Route path="eventos" element={<HotelPages/>} />

        <Route path="servicios" element={<ServiciosHotel/>} />

        <Route path="usuarios" element={<UsuarioHotel/>} />

        <Route path="recerva" element={<Recerva/>} />

        <Route path="login" element={<LoginHotel/>} />

        <Route path="factura" element={<Factura/>} /> 


        <Route path="/*" element={<Navigate to="/eventos"/>} />

    </Routes>
    </>
  )
}

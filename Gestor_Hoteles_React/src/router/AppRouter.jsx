import {Navigate,Route,Routes} from "react-router-dom";
import { HotelPages,Habitaciones, UsuarioHotel, ServiciosHotel } from "../hotel";
import { LoginHotel } from "../auth";
import { NavBar } from "../navbar";

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

        <Route path="login" element={<LoginHotel/>} />

        <Route path="/*" element={<Navigate to="/eventos"/>} />
    </Routes>
    </>
  )
}

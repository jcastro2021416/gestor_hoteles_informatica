import { Navigate, Route, Routes } from 'react-router-dom';
import { Factura, Habitaciones, HotelPages, Recerva, ServiciosHotel, UsuarioHotel, VistaUsuario } from '../pages';
import { NavBar } from "../../navbar";

export const HotelRouter = () => {
  return (
    <>
    <NavBar/>
    <Routes>
    <Route path="habitaciones" element={<Habitaciones/>} />

        <Route path="eventos" element={<HotelPages/>} />

        <Route path="servicios" element={<ServiciosHotel />} />

        <Route path="usuarios" element={<UsuarioHotel/>} />

        <Route path="recerva" element={<Recerva/>} />

        {/* <Route path="login" element={<LoginHotel/>} /> */}

        <Route path="factura" element={<Factura/>} /> 

        <Route path="datosUsuario" element={<VistaUsuario/>} />


        <Route path="/*" element={<Navigate to="/eventos"/>} />

    </Routes>
    </>
  )
}

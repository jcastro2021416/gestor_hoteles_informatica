import {Route,Routes} from "react-router-dom";
import { HotelRouter } from "../hotel";
import { LoginHotel } from "../auth";

export const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route path="login" element={<LoginHotel/>} />
        <Route path="/*" element={<HotelRouter/>} />

    </Routes>
    </>
  )
}

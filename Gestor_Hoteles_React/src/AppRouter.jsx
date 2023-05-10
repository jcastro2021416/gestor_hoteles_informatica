import {Navigate,Route,Routes} from "react-router-dom";
import Hotel from "./hotel/components/Hotel";
import { NavBar } from "./components/NavBar";

export const AppRouter = () => {
  return (
    <>
    {isUserAuthenticated() &&<NavBar></NavBar>}
    <Routes>
        <Route>

        </Route>
    </Routes>
    </>
  )
}

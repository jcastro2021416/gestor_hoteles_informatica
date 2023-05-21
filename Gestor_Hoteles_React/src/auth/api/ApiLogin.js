import axios from "axios";
import Swal from 'sweetalert2';

const URL = "http://localhost:3009/api/";

export const login = async (email, password) => {
    try{
        const response = await axios.post(`${URL}login`,{email,password});
        const token = response.data.token;
        token && localStorage.setItem("x-token",token);
        return token;
    }catch(errr){
        Swal.fire({
            icon:"error",
            title:"Datos incorrectos",
            text: "No se ha iniciado sesion",
        })
    }
}
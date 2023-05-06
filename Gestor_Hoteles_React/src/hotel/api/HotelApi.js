import axios from "axios";
const URL = "http://localhost:/api/"


// Listar hotel
export const listHotelApi = async()=>{
    try{
        const {data:{Hotel}}= await axios.get(`${URL}read-hotel`)
        console.log(Hotel);
        return Hotel;
    }catch(error){
        throw new Error(error);
    }
}

// Eliminar Hotel
export const deleteHotelApi = async ()=>{
    try{

    }catch({}){

    }

}


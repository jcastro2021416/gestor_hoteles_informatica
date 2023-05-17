import axios from "axios";

const URL = "http://localhost:3000/api/"
const token = localStorage.getItem("token");

// Litar Usuario
export const listUserHotApi = async ()=> {
    try{
        const {data:{ User }}=await axios.get(`${URL}read-user`)
        console.log(  User);
        return User;
    }catch(errr){
        throw new Error (errr);
    }
}
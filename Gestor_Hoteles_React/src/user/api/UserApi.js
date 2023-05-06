import axios from "axios";
const URL = "http://localhost: /api/"
const token = localStorage.getItem("token");

// Listar usuario 
export const listUserApi = async()=>{
    try{
        const {data:{User}}= await axios.get(`${URL}read-user`)
        console.log(User);
        return User;
    }catch(erro){
        throw new Error(erro);
    }
}
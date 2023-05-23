import React, { useState } from 'react'
import '../css/login.css'
import { login } from "../api/ApiLogin";
import Swal from "sweetalert2";

export const LoginHotel = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");


  const iniciarSesion = async( iniciar)=>{
    iniciar.preventDefault();
    const result = await login(email,password);
      if(result){
        Swal.fire({
          icon:"success",
          title:"Bien :D",
          text:"Ha iniciado secion correctamente",
        }).then(confiredlogin=>{
          if(confiredlogin){
            window.location.href="/";
          }else{
            window.location.href="/";
          }
        });
      }
  }
  return (
    <>
    
  <div class="login-box">
            <h2>Login</h2>
            <form>
              <div class="user-box">
               <label>Username</label>
              <input value={email} onChange={({target:{value}})=>setEmail(value)}
                // y aqui le metes css para que se mire god
                    placeholder="email"
                    id="email"
                    type="email"
                    required
                  />
              </div>

              <div class="user-box">
                <label>Password</label>
                <input value={password} onChange={({target:{value}})=>setPassword(value)}
                //  y aqui le metes css para que se mire god
                    placeholder="password"
                    id="password"
                    type="password"
                    required
                  />
              </div>

              <div className="">
                  <button type="submit" onClick={(iniciar) => iniciarSesion(iniciar)}>
                    Enter
                  </button>
              </div>
            </form>
          </div>
    
         
    
    </>
  )
}

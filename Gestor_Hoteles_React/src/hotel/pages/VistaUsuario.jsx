import React from 'react'
import './css/VistaUsuario.css'

export const VistaUsuario = () => {
  return (
    <>
    <div className="contenedorUsuar">
        <div className="cuadroUsu">
          <img src="./src/Img/usuario.png" alt=""/>
          <h1>Datos del usario</h1><br />
          <h2>Nombre:</h2>
          <p>Name</p>
          <h2>Email:</h2>
          <p>admin@gmail.com</p>
          <h2>Rol:</h2>
          <p>Admin</p>
        </div>
    </div>
    </>
    )
}

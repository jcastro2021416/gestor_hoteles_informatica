import React, { useEffect, useState } from 'react'
import { listUserHotApi } from '../api/UserHotelApi';
import  './css/usuario.css'



export const UsuarioHotel = () => {
    const [User,setUsers] = useState([]);

    const reload = async()=>{
        const result = await listUserHotApi();
        setUsers(result);
    };

    useEffect(() =>{
        reload();
        console.log(User)
    },[]);
    
  return (
    <>
    <div className="contenedorUsu">
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">Buscar Usuarios</a>
          <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar"/>
          <button className="btn btn-outline-success" type="submit">Buscar</button>
          </form>
      </div>
    </nav><br />
    
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre de Usuario</th>
                        <th>Correo Electonico</th>
                        <th>Rol</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                
                <tbody>
                    {User.map(userActual=>{
                        return(
                        <tr key={userActual._id}>
                            <td>{userActual._id}</td>
                            <td>{userActual._name}</td>
                            <td>email</td>
                            <td>rol</td>
                            <td><button className="btn btn-danger margin-button">Eliminar</button>
                            <button className="btn btn-warning margin-button">Editar</button>
                            <button className="btn btn-success margin-button">Ver</button>
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
    </>
  )
}

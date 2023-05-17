import React, { useState } from 'react'
import { listUserHotApi } from '../api/UserHotelApi';


export const UsuarioHotel = () => {
    const [User,setUsers] = useState([]);

    const reload = async()=>{
        const result = await listUserHotApi();
        setUsers(result);
    }
    
  return (
    <>
    <div className="contenedorUsu">
    <h1>Usuarios</h1>
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
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>email</td>
                            <td>rol</td>
                            <td><button className="btn btn-danger margin-button">Eliminar</button>
                            <button className="btn btn-warning margin-button">Editar</button>
                            <button className="btn btn-success margin-button">Ver</button>
                            </td>
                        </tr>
                </tbody>
            </table>
        </div>
    </div>
    </>
  )
}

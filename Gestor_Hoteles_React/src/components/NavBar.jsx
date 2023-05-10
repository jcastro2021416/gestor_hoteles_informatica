import React from 'react'

export const NavBar = () => {
  return (
    <>
    {/* Parte del encabezado del menu  */}
    <nav className="navbar">
        <div className="navbar-logo">
          <a href="">
            <img src="./src/image/LogoHotel2.1.png" alt="" />
          </a>
        </div>
        <ul className="navbar-links">
        <ul className="menuh">
        <li><a href="#">Menú</a>
                <ul className="menuv">
                    <li><a href="#">Habitaciónes</a></li>
                    <li><a href="#">Eventos</a></li>
                    <li><a href="#">Servicio</a></li>
                    <li><a href="#">Mis viajes</a></li>
                </ul>
            </li>
          <li className="linkhover"><a href="#">Iniciar sesión</a></li>
        </ul>
        </ul>
      </nav>
    </>
  )
}

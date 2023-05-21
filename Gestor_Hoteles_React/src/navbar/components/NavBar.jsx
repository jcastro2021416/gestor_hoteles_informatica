import React from 'react'
import { Link, NavLink, useNavigate} from 'react-router-dom'


export const NavBar = () => {
  
  const navigate = useNavigate();
  
  const onLogout = () => {
    navigate('/login', {
      replace: true
    });
  }
  {/* Parte del encabezado del menu  */}
  return (
    <nav className="navbarHOtel">
      <div className="navbar-logoHote">
        <Link className="" to="/">
          
            <img src="./src/Img/LogoHotel2.1.png" alt="" />
          
        </Link>
      </div>

      <ul className="navbar-linksHOte">
        <ul className="menuh">
          <li>
            <NavLink
              className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
              to="/habitaciones"
            >
              Habitaciones
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
              to="/eventos"
            >
              Eventos
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
              to="/servicios"
            >
              Servicios
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
              to="/usuarios"
            >
              Usuarios
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
              to="/recerva"
            >
              Recerva
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
              to="/factura"
            >
              Factura
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
              to="/datosUsuario"
            >
              Usuario
            </NavLink>
          </li>
        <br />
          <button className="nav-linkHOt btnHOte" onClick={onLogout}>
            Login
          </button>
        </ul>
      </ul>
    </nav>
  );
};
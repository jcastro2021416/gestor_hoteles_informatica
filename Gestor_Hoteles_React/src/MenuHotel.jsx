import { useState } from 'react'
import './MenuHotel.css'

function MenuHotel() {

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
          <li><a href="#">Crea una cuenta</a></li>
          <li><a href="#">Iniciar sesión</a></li>
        </ul>
      </nav>

      <div className="slider_conteiner">
        <div className="slider position">
        </div>
      </div>

      <div className="contenedor">
        <div className="cuadro">
          <img src="./src/image/Habitacion1.jpg" alt=""/>
          <h2>Habitación 1</h2>
          <p>Lugar: Ciudad X</p>
          <p>Precio: Q1200</p>
          <button>Ver más</button>
        </div>
        <div className="cuadro">
          <img src="./src/image/Habitacion2.jpg" alt=""/>
          <h2>Habitación 2</h2>
          <p>Lugar: Ciudad Y</p>
          <p>Precio: Q1200</p>
          <button>Ver más</button>
        </div>
    <div className="cuadro">
      <img src="./src/image/Habitacion3.jpg" alt=""/>
        <h2>Habitación 3</h2>
        <p>Lugar: Ciudad Z</p>
        <p>Precio: Q1200</p>
        <button>Ver más</button>
        </div>
      </div>
      <footer>
        <h1>Hotel</h1>
        <h2>Harmony House</h2>
        <div className="footer-images">
          <a href="#"><img src="./src/image/Face.png" alt="" /></a>
          <a href="#"><img src="./src/image/twi.png" alt="" /></a>
          <a href="#"><img src="./src/image/ig.jpg" alt="" /></a>
        </div>
        <hr />
        <p>© 2023 Hotel Harmony House.</p>
      </footer>
    </>
  )
}

export default MenuHotel

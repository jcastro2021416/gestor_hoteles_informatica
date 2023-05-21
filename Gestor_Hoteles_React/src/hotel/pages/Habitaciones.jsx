
import React from 'react'

export const Habitaciones = () => {
  return (
    <>
    <div className="contenedor">
        <div className="cuadro">
          <img src="./src/Img/Habitacion1.jpg" alt=""/>
          <h2>Habitación 1</h2>
          <p>Lugar: Ciudad X</p>
          <p>Precio: Q1200</p>
          <button>Ver más</button>
        </div>
        <div className="cuadro">
          <img src="./src/Img/Habitacion2.jpg" alt=""/>
          <h2>Habitación 2</h2>
          <p>Lugar: Ciudad Y</p>
          <p>Precio: Q1200</p>
          <button>Ver más</button>
        </div>
    <div className="cuadro">
      <img src="./src/Img/Habitacion3.jpg" alt=""/>
        <h2>Habitación 3</h2>
        <p>Lugar: Ciudad Z</p>
        <p>Precio: Q1200</p>
        <button>Ver más</button>
        </div>
      </div>
    </>
  )
}

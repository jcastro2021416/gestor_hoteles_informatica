import React from 'react';

export const ServiciosHotel = () => {
  return (
    <>
    <div className="container">
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">Servicios del Hotel</a>
          <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar"/>
          <button className="btn btn-outline-success" type="submit">Buscar</button>
          </form>
      </div>
    </nav><br />
    <div className="row">
      <div className="col-md-4">
        <div className="card">
          <img src="./src/Img/Habitacion2.jpg" className="card-img-top" alt="Servicio 1"/>
          <div className="card-body">
          <div className="siRating">
          <h5 className="card-title">Chiquimula</h5>
          <button type="button" className="btn btn-primary">Calificación <span className="badge badge-light">9</span></button>
        </div>
            <p className="card-text">4 Cuartos</p>
            <p className="card-text">Apartamento con aire acondicionado</p>
            <p className="card-text">Estudio completo • 1 baño • 21m² cama matrimonial</p>
            <button type="button" className="btn btn-outline-info col-12 mx-auto">Reservar</button>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <img src="./src/Img/Habitacion3.jpg" className="card-img-top" alt="Servicio 1"/>
          <div className="card-body">
          <div className="siRating">
          <h5 className="card-title">Chiquimula</h5>
          <button type="button" className="btn btn-primary">Calificación <span className="badge badge-light">9</span></button>
        </div>
            <p className="card-text">4 Cuartos</p>
            <p className="card-text">Apartamento con aire acondicionado</p>
            <p className="card-text">Estudio completo • 1 baño • 21m² cama matrimonial</p>
            <button type="button" className="btn btn-outline-info col-12 mx-auto">Reservar</button>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <img src="./src/Img/Habitacion2.jpg" className="card-img-top" alt="Servicio 1"/>
          <div className="card-body">
          <div className="siRating">
          <h5 className="card-title">Chiquimula</h5>
          <button type="button" className="btn btn-primary">Calificación <span className="badge badge-light">9</span></button>
        </div>
            <p className="card-text">4 Cuartos</p>
            <p className="card-text">Apartamento con aire acondicionado</p>
            <p className="card-text">Estudio completo • 1 baño • 21m² cama matrimonial</p>
            <button type="button" className="btn btn-outline-info col-12 mx-auto">Reservar</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

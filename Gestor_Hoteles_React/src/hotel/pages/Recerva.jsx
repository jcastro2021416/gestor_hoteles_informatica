import React from 'react'
import './css/estilrecerva.css'

export const Recerva = () => {
  return (
    <>
    
  <section class="wrapper2">
    <div class="container">
      <div class="heading mtop">
        <h5>Recerva</h5>
        <h2>  Harmony House </h2>
      </div>

      <div class="content grid mtop">
        <div class="box">
          <i class="fas fa-shipping-fast"></i>
          <h3>Tu escape perfecto comienza aquí: reserva y déjanos cuidar de todos los detalles para que disfrutes al máximo</h3>
        </div>
        <div class="box">
          <i class="fas fa-mug-hot"></i>
          <h3>Reserva de alojamiento:</h3>
          <p> Ofrece una habitación, apartamento, casa de huéspedes. Los servicios incluye acceso a piscinas, gimnasios, restaurantes, servicio de habitaciones, estacionamiento, Wi-Fi, entre otros.</p>
        </div>
        <div class="box">
          <i class="fas fa-car"></i>
          <h3>Reserva de restaurante</h3>
          <p> Asegura una mesa en un establecimiento gastronómico en una fecha y hora específicas. </p>
        </div>
        <div class="box">
          <i class="far fa-water"></i>
          <h3>Reserva de actividades o experiencias</h3>
          <p>Para participar en actividades o experiencias específicas, como visitas guiadas, excursiones, eventos deportivos, conciertos, spa, parques temáticos, entre otros. </p>
        </div>
      </div>
    </div>
  </section>


  <section class="room wrapper2 top" id="room">
    <div class="container">
      <div class="heading">
        <h5>Nuestras Habitaciones </h5>
        <h2>Fascinantes habitaciones y suites
        </h2>
      </div>
      <div class="content flex mtop">
        <div class="left grid2">
          <div class="box">
            <i class="fas fa-desktop"></i>
            <p>Costo Gratis</p>
            <h3>Sin cuota de reserva</h3>
          </div>
          <div class="box">
            <i class="fas fa-dollar-sign"></i>
            <p>Costo Gratis</p>
            <h3>Mejor tarifa garantizada</h3>
          </div>
          <div class="box">
            <i class="fab fa-resolving"></i>
            <p>Costo Gratis</p>
            <h3>Reservas 24/7</h3>
          </div>
          <div class="box">
            <i class="fal fa-alarm-clock"></i>
            <p>Costo Gratis</p>
            <h3>WiFi de alta velocidad</h3>
          </div>
          <div class="box">
            <i class="fas fa-mug-hot"></i>
            <p>Costo Gratis</p>
            <h3>Desayuno gratis</h3>
          </div>
          <div class="box">
            <i class="fas fa-user-tie"></i>
            <p>Costo Gratis</p>
            <h3>una persona gratis</h3>
          </div>
        </div>
        <div class="right">
        </div>
      </div>
    </div>
  </section>

  <section class="offer mtop" id="services">
    <div class="container">
      <div class="heading">
        <h5>OFERTAS EXCLUSIVAS </h5>
        <h3>Puedes obtener una oferta exclusiva</h3>
      </div>

      <div class="content grid2 mtop">
        <div class="box flex">
          <div class="left">
          </div>
          <div class="right">
            <h4>Habitación de lujo</h4>
            <div class="rate flex">
            </div>
            <p> Habitación doble insonorizada con patio y secadora de ropa</p>
            <p> Alojamiento para niños y provisión de camas adicionales</p>
            <p> Incluye Servicio al cuarto</p>
            <h5>Desde Q2,000/Noche</h5>
            <button class="flex1">
              <span>Check Availability</span>
              <i class="fas fa-arrow-circle-right"></i>
            </button>
          </div>
        </div>
        <div class="box flex">
          <div class="left">
          </div>
          <div class="right">
            <h4>Habitacion con Terraza o patio</h4>
            <div class="rate flex">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <p>Este estudio cuenta con balcón, zona de comedor y zona de Vista </p>
            <p>Sercicios de Agua Y luz</p>
            <h5>Desde Q700/Noche</h5>
            <button class="flex1">
              <span>Vista desde la habitación</span>
              <i class="fas fa-arrow-circle-right"></i>
            </button>
          </div>
        </div>
        <div class="box flex">
          <div class="left">
          </div>
          <div class="right">
            <h4>Vista desde la habitación</h4>
            <div class="rate flex">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <p>Este encantador cuarto con vista te brinda la oportunidad de disfrutar de vistas impresionantes desde la comodidad de tu habitación. </p>
            <h5>Desde Q1,000/Noche</h5>

            <button class="flex1">
              <span>Check Availability</span>
              <i class="fas fa-arrow-circle-right"></i>
            </button>
          </div>
        </div>
        <div class="box flex">
          <div class="left">
          </div>
          <div class="right">
            <h4>Habitación doble económica</h4>
            <div class="rate flex">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <p> 2 personas </p>
            <p> 2 camas Queen size</p>
            <p>una habitación básica que brinda comodidad y funcionalidad.</p>
            <h5>Desde Q300/Noche</h5>
            <button class="flex1">
              <span>Check Availability</span>
              <i class="fas fa-arrow-circle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
        
    </>
  )
}

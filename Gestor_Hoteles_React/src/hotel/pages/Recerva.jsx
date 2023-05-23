import React from 'react'
import './css/recerva.css'

export const Recerva = () => {
  return (
    <>
    
    <div className="container">
      <div className="heading mtop">
        <h5>Recerva</h5>
        <h2>  Harmony House </h2>
      </div>
    </div>

  <section className="offer mtop" id="services">
    
    <div className="container">

      <div className="heading">
        <h5>OFERTAS EXCLUSIVAS </h5>
        <h3>Puedes obtener una oferta exclusiva</h3>
      </div>

      <div className="content grid2 mtop">
        <div className="box flex">
          <div className="left">
          <img src="https://images.trvl-media.com/lodging/9000000/8340000/8336300/8336251/e4b66ac3.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="" />

          </div>
          <div className="right">
            <h4>Habitación de lujo</h4>
            <div className="rate flex">
            </div>
            <p> Habitación doble insonorizada con patio y secadora de ropa</p>
            <p> Alojamiento para niños y provisión de camas adicionales</p>
            <p> Incluye Servicio al cuarto</p>
            <h5>Desde Q2,000/Noche</h5>
            <button className="flex1">
              <span>Check Availability</span>
              <i class="fas fa-arrow-circle-right"></i>
            </button>
          </div>
        </div>
        <div className="box flex">
          <div className="left">
         <img src="https://images.trvl-media.com/lodging/9000000/8340000/8336300/8336251/1593c1fb.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt=""/>
          </div>
          <div className="right">
            <h4>Habitacion con Terraza o patio</h4>
            <div className="rate flex">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p>Este estudio cuenta con balcón, zona de comedor y zona de Vista </p>
            <p>Sercicios de Agua Y luz</p>
            <h5>Desde Q700/Noche</h5>
            <button className="flex1">
              <span>Vista desde la habitación</span>
              <i className="fas fa-arrow-circle-right"></i>
            </button>
          </div>
        </div>
        <div className="box flex">
          <div className="left">
          <img src="https://images.trvl-media.com/lodging/9000000/8340000/8336300/8336251/4ad1ec1c.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt=""/>
          </div>
          <div className="right">
            <h4>Vista desde la habitación</h4>
            <div className="rate flex">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p>Este encantador cuarto con vista te brinda la oportunidad de disfrutar de vistas impresionantes desde la comodidad de tu habitación. </p>
            <h5>Desde Q1,000/Noche</h5>

            <button className="flex1">
              <span>Check Availability</span>
              <i className="fas fa-arrow-circle-right"></i>
            </button>
          </div>
        </div>
        <div className="box flex">
          <div className="left">
          <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ21Z1ZiStnO1TPiGwp32NEsNbzHprfpbOk0Q&usqp=CAU" alt=""/>
          </div>
          <div className="right">
            <h4>Habitación doble económica</h4>
            <div class="rate flex">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p> 2 personas </p>
            <p> 2 camas Queen size</p>
            <p>una habitación básica que brinda comodidad y funcionalidad.</p>
            <h5>Desde Q300/Noche</h5>
            <button className="flex1">
              <span>Check Availability</span>
              <i className="fas fa-arrow-circle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
              <div className="container">
                <div className="heading mtop">
                  <h5>Como LLegar </h5>
                  <h2>  Harmony House </h2>
                </div>
              </div>
  </section>
  <center>  
        <div className=''>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.5317289040086!2d-90.53811678255614!3d14.625731200000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a1903189ab39%3A0x8592a66fc5ba4ba7!2s6A%20Avenida%2013-54%2C%20Cdad.%20de%20Guatemala%2001007!5e0!3m2!1ses!2sgt!4v1684857865899!5m2!1ses!2sgt"
                    width="1200"
                    height="650"
                    style={{ border: '0' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                </div>
          </center>
    
        
    </>
  )
}

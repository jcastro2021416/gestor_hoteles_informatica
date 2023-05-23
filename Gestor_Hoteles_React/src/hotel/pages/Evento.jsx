import React from 'react'
import  './css/evento.css'


export const HotelPages = () => {
  return (
    <>

  
<section class="color" id="color">
        <div class="container">
          <div class="heading">
            <h2>Nuestras Habitaciones </h2>
            <h2>Fascinantes habitaciones y suites
            </h2>
          </div>
        </div>
        
      </section>
    
    <div class="container">
        <div class="item-container">
            <div class="img-container">
            <img src="data:image/jpeg;base64,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" alt="Event image" />

            </div>

            <div class="body-container">
                <div class="overlay"></div>

                <div class="event-info">
                <center> <p class="title">Conferencias y reuniones</p> </center>   
                    <div class="separator"></div>
                    <p class="info">Guatemala City</p>
                    <p class="price">|Recerva Evento|</p>

                    <div class="additional-info">
                        <p class="info">
                            <i class="fas fa-map-marker-alt"></i>
                            Grand Harmony House 
                        </p>
                        <p class="info">
                            <i class="far fa-calendar-alt"></i>
                             Octubre 12, 10:00, AM Recerva Espacio
                        </p>

                        <p class="info description">
                            El hotel cuentan con instalaciones para eventos que incluyen salones de conferencias, salas de reuniones y equipos audiovisuales. Pueden organizar conferencias, seminarios, presentaciones y reuniones corporativas.g <span>more...</span>
                        </p>
                    </div>
                </div>
                <button class="action">Evento</button>
            </div>
        </div>

        <div class="item-container">
            <div class="img-container">
            <img src="https://blogdelhotel.files.wordpress.com/2015/07/spring-bitacora-hotel-xg0_2983.jpg" alt="Event image" />

            </div>

            <div class="body-container">
                <div class="overlay"></div>

                <div class="event-info">
                 <center>  <p class="title">Actividades recreativas</p></center>  
                    <div class="separator"></div>
                    <p class="info">Guatemala City</p>
                    <p class="price">|Recerva Evento|</p>


                    <div class="additional-info">
                        <p class="info">
                            <i class="fas fa-map-marker-alt"></i>
                              Grand Harmony House 

                        </p>
                        <p class="info">
                            <i class="far fa-calendar-alt"></i>
                             Julio 1 Disponible, 10:00 AM, Recerva Espacio
                        </p>

                        <p class="info description">
                            Podemos ofrecer actividades recreativas para sus huéspedes, como clases de yoga, programas de fitness, 
                            excursiones, paseos en bicicleta, deportes acuáticos, entre otros. <span>more...</span>
                        </p>
                    </div>
                </div>
                <button class="action">Evento</button>
            </div>
        </div>

        <div class="item-container">
            <div class="img-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjKElXSaByWWUVDfmj9nKUtwj3GIvzDZ-i7Q&usqp=CAU" alt="Event image" />


            </div>

            <div class="body-container">
                <div class="overlay"></div>

                <div class="event-info">
                    <center><p class="title">|Eventos gastronómicos| </p> </center>  
                    <div class="separator"></div>
                    <p class="info">Guatemala City</p>
                    <p class="price">|Recerva Evento|</p>


                    <div class="additional-info">
                        <p class="info">
                            <i class="fas fa-map-marker-alt"></i>
                            Grand Harmony House 
                        </p>
                        <p class="info">
                            <i class="far fa-calendar-alt"></i>
                             Agosto 29, 10:00 AM, Recerva Espacio
                        </p>

                        <p class="info description">
                            Organiza cenas temáticas, catas de vino, festivales de alimentos y bebidas, y clases de cocina.<span>more...</span>
                        </p>
                    </div>
                </div>
                <button class="action">Evento</button>
            </div>
        </div>

        <div class="item-container">
            <div class="img-container">
            <img src="data:image/jpeg;base64,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" alt="" />

            </div>

            <div class="body-container">
                <div class="overlay"></div>

                <div class="event-info">
                    <center> <p class="title">Espectáculos y entretenimiento</p></center> 
                    <div class="separator"></div>
                    <p class="info">Guatemala City</p>
                    <p class="price">|Recerva Evento|</p>

                    <div class="additional-info">
                        <p class="info">
                            <i class="fas fa-map-marker-alt"></i>
                            Grand Harmony House 
                        </p>
                        <p class="info">
                            <i class="far fa-calendar-alt"></i>
                             Noviembre 19, 10:00 AM, Recerva Espacio
                        </p>

                        <p class="info description">
                            Estas actividades proporcionan entretenimiento adicional y 
                            crean un ambiente animado para los huéspedes y visitantes.<span>more...</span>
                        </p>
                    </div>
                </div>
              
                <button class="action">Evento</button>
            </div>
            <div class="event-info">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.5317289040086!2d-90.53811678255614!3d14.625731200000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a1903189ab39%3A0x8592a66fc5ba4ba7!2s6A%20Avenida%2013-54%2C%20Cdad.%20de%20Guatemala%2001007!5e0!3m2!1ses!2sgt!4v1684857865899!5m2!1ses!2sgt"
                    width="600"
                    height="450"
                    style={{ border: '0' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                </div>

        </div>
    </div>
    <div className="container">
      <div className="heading mtop">
        <h5>Recerva Evento Hoy</h5>
        <h2>  Harmony House </h2>
      </div>
    </div>
    <center>  
        <div className=''>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.5317289040086!2d-90.53811678255614!3d14.625731200000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a1903189ab39%3A0x8592a66fc5ba4ba7!2s6A%20Avenida%2013-54%2C%20Cdad.%20de%20Guatemala%2001007!5e0!3m2!1ses!2sgt!4v1684857865899!5m2!1ses!2sgt"
                    width="900"
                    height="550"
                    style={{ border: '0' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                </div>
          </center>
    
    
    </>
  );
}


'use strict'

const Event = require('../model/eventModel');
const Hotel = require('../model/hotelModel');

//---------------------------create event------------------------------

const createService = async(req, res) => {
    
    const {name,  type, date, hotel} = req.body

    try{

        const event = await Event.findOne({name});

        if(event){
            return res.status(410).json({
                msg: `Ya existe un evento registrado con este nervioso`,
                ok: false,
                event: event,
            });
        }
        
        const hotelExist = await Hotel.findById(hotel);

        if(!hotelExist){
            return res.status(400).json({
                msg: `No se encontro un hotel con este Id`,
                ok: false,
                hotel: hotelExist    
            });
        }

        const newEvent = await Event.create({name, type, date, hotel});

        hotelExist.event = newEvent._id
        await hotelExist.save()

        res.status(200).send({
            ok: true,
            msg: `${name} creado exitosamente`,
            event: newEvent
        });

    }catch(err){
        console.log(err)
        res.status(510).send({
            ok: false,
            msg: `No se podido crear el evento: ${name}`,
            error: err,
        });
    }
}

//----------------------------------------------read event-------------------------------------------------

const readEvent = async(req, res) => {

    try{

        const event = await Event.find();

        if(!event){
            res.status(410).send({
                ok: false,
                msg:`No hay eventos disponibles`
            });
        }else{
            res.status(200).send({
                eventos_obtenidos: event
            });
        }

    }catch(err){
        throw new Error('Error al mostrar los eventos')
    }

}

//--------------------------------------update event--------------------------------------

const updateEvent = async(req, res) => {

    const {name,  type, date, hotel} = req.bod
    const {id} = req.params;

    try{

        const existEvent = await Event.findOne({name});

        if(existEvent && existEvent._id != id){
            return res.status(400).json({
                msg: 'El nombre del servicio ya existe'
            });
        }
        
        const service_past = await Event.findById(id);

        if(!service_past.hotel){
            const hotelAnterior = await Hotel.findById(service_past.hotel);
            hotelAnterior.event = null
            await hotelAnterior.save();
        }

        const hotelExist = await Hotel.findById(hotel)
        
        if(!hotelExist){
            return res.status(410).json({
                msg: 'El hotel no es existente'
            });
        }

        const eventComplete = await Event.findByIdAndUpdate(
            id,
            {name, type, date, hotel},
            {new: true}
        );

        hotelExist.event = eventComplete._id
        await hotelExist.save();

        return res.status(200).send({
            msg: `El evento ${name} se actualizo de forma exitosa`,
            event: eventComplete
        });

    }catch(err){
        console.error(error)
            res.status(500).json({
                msg: 'Error al actualizar el evento'
            });
    }

}

//------------------------------------exportaciones----------------------------------------

module.exports = {
    createService,
    readEvent
}

















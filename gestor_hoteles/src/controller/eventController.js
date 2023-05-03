'use strict'

const Event = require('../model/eventModel');
const Hotel = require('../model/hotelModel');

//---------------------------create event------------------------------

const createService = async(req, res) => {
    
    const {name,  type, date, Hotel} = req.body

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

        const newEvent = await Event.create({name, type, date, Hotel});

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

//------------------------------------exportaciones----------------------------------------

module.exports = {
    createService
}

















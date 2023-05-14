'use strict'

const Room = require('../model/roomModel');
const Hotel = require('../model/hotelModel');

//--------------------------------------create room------------------------------------------------------

const createRoom = async(req, res) => {
    const {numberRoom, typeRoom, price, hotel, reservation, available, available_To} = req.body;
    try{
        const room = await Room.findOne({numberRoom});
        if(room){
            return res.status(400).send({
                msg: "Una habitacion ya se a registrado con este numero",
                ok: false,
                room: room  
            });
        }
        
        const hotelExist = await Hotel.findById(hotel);
        if(!hotelExist){
            return res.status(400).json({
                msg: 'No se encontro administrado con este Id',
                ok: false,
                hotel: hotelExist,
            });
        }

        const newRoom = await Room.create({numberRoom, typeRoom,price,hotel,reservation,available,available_To})

        hotelExist.room = newRoom._id
        await hotelExist.save()

    res.status(200).json({
        msg: `La habitacion ${numberRoom} a creado de forma correcta`,
        ok: true,
        room: newRoom
    });

    }catch(err){
        console.log(err);
        res.status(500).json({
            ok: false,
            msg: `No se a logrado crear la habitacion`,
            error: err
        });
    }
}

//------------------------------------list room----------------------------------------------

const readRoom = async(req, res) => {
    try{
        
        const room = await Room.find();

        if(!room){
            res.status(410).json({
                msg: `No hay habitaciones disponibles`,
                ok: false
            });
        }else{
            res.status(200).json({
                msg: `Las habitaciones son las siguientes:`,
                habitaciones_obtenidas: room,
                ok: true
            });
        }

    }catch(err){
        console.log(err)
        throw new Error(err)
    }
}

//------------------------------------------update room----------------------------------------------------

const updateRoom = async(req, res) =>{
    
    const {numberRoom, typeRoom, price, hotel, reservation, available, available_To} = req.body;
    const {id} = req.params;
    
    try{
        
    const existRoom = await Room.findOne({numberRoom});
    if(existRoom && existRoom._id != id){
        return res.staus(400).json({
            msg: `El numero de la habitacion ya existe`
        });
    }
    const room_past = await Room.findById(id);

    if(!room_past.hotel){
        const hotelAnterior = await Room.findById(room_past.hotel)
        hotelAnterior.room = null
        await hotelAnterior.save();
    }
    const roomComplete = await Room.findByIdAndUpdate(
        id,
        {numberRoom, typeRoom, price, hotel, reservation, available, available_To},
        {new: true}
        );

        hotelExist.room = roomComplete._id
        await hotelExist.save();
        
        return res.status(200).send({
            msg: `La habitacion de actualizo de forma correcta`
        })

    }catch(err){
        console.log(err)
        res.status(201).json({
            msg:`Error al acutaliza los datos de la habitacion`
        })
    }
}

//--------------------------------------------- delete room --------------------------------------------

const deleteRoom = async(req, res) => {
    
    const roomId = req.params.id;
    const {name} = req.body;

    try{
        const room = await Room.findById(roomId)
        
        if(!room){
            return res.status(404).json({
                msg: `No se encontro esta habitacion`
            });
        }
        await room.remove();

        const hotel = await Hotel.findOne({hote: id})

        if(hotel){
            hotel.room = null
            await hotel.save();
        }

        return res.status(410).json({
            msg: `La habitacion se elimino de forma correcta`, room: room
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            msg: `A ocurrido error al eliminar el hotel ${name}`
        })
    }
}

//--------------------------------------exportaciones-------------------------------------------

module.exports = {
    agregarRoom,
    readRoom,
    updateRoom,
    deleteRoom
}







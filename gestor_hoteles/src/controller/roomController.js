'use strict'

const Room = require('../model/roomModel');
const Hotel = require('../model/hotelModel');

const createRoom = async(req, res) => {
    const {numberRoom, typeRoom, price, hotel, reservations, avaible, avaible_to} = req.body;
    try{
        let room = await Room.findOne({numberRoom});
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
                msg: `No se encontro el Hotel con este ID`,
                ok: false,
                hotel: hotelExist,
            });
        }

    //const {numberRoom, typeRoom, price, hotel, reservations, avaible, avaible_to} = req.body;
    const newRoom = await Room.create({numberRoom, typeRoom, price, hotel, reservations, avaible, avaible_to});

    hotelExist.room = newRoom._id
    await hotelExist.save();

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






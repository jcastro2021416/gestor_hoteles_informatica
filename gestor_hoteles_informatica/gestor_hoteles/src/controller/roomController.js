'use strict'

const Room = require('../model/roomModel');
const Hotel = require('../model/hotelModel');

const createRoom = async(req, res) => {
    const {numberRoom} = req.body;
    try{
        const room = await Room.findOne({numberRoom});
        if(room){
            return res.status(400).send({
                msg: "Una habitacion ya se a registrado con este numero",
                ok: false,
                room: room  
            });
        }
        
        room = new Room(req.body)
        room = await room.save();

    res.status(200).json({
        msg: `La habitacion ${numberRoom} a creado de forma correcta`,
        ok: true,
        room: room
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
    try{
        const id = req.params.id
        const roomEdit = {...req.body}
        const roomComplete = await Room.findByIdAndUpdate(id, roomEdit, {new: true});
        if(roomComplete){
            return res.status(200).send({
                msg: `La habitacion se actualizo de forma existosa`, roomComplete
            });
        }else{
            res.status(404).send({
                msg: `La habitacion que desea actualizar no existe dentro de nuestra db`
            });
        }
    }catch(err){
        console.log(err)
        throw new Error(err)
    }
}

//--------------------------------------------- delete room --------------------------------------------

const deleteRoom = async(req, res) => {
    try{

        const roomId = req.params.id
        const room = await Room.findById(roomId)
        if(!room){
            return res.status(404).json({
                msg: `No se encontro esta habitacion`
            });
        }
        await room.remove();

        res.status(410).json({
            msg: `La habitacion se elimino de forma correcta`, room: room
        })
    }catch(err){
        console.log(err)
        throw new err
    }
}

//--------------------------------------exportaciones-------------------------------------------

module.exports = {
    createRoom,
    readRoom,
    updateRoom,
    deleteRoom
}







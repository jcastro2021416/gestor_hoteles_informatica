'use strict'

const User = require('../model/userModel')
const Reservation = require('../model/reservationModel')
const Room = require('../model/roomModel')
const Service = require('../model/serviceModel')

//-----------------------------------crud Hoteles------------------------------------------

//-------------------------------------create--------------------------------------------------

const createReservation = async(req, res) => {

    const {user, room, checkIn, checkOut, services, totalPrice, isActive} = req.body

    try{
        const userExist = await User.findById(user);
        const roomExist = await  Room.findById(room);
        const servicesExist = await Service.findById(services)

        if(!userExist){
            return res.status(400).json({
                msg: 'No se encuentra existe el usuario con este Id',
                msg: 'Asegurese de haber colocado los datos correctamente',
                ok: false,
                userExist: userExist
            });
        }

        if(!roomExist){
            return res.status(400).json({
                msg: 'No se encuentra existe la habitacion con este Id',
                msg: 'Asegurese de haber colocado los datos correctamente',
                ok: false,
                roomExist: roomExist
            });
        }

        if(!servicesExist){
            return res.status(400).json({
                msg: 'No se encuentra existe el servicio con este Id',
                msg: 'Asegurese de haber colocado los datos correctamente',
                ok: false,
                servicesExist: servicesExist
            });
        }

        const newReservation = await Reservation.create({user, room, checkIn, checkOut, services, totalPrice, isActive})

        roomExist.reservations = newReservation._id
        await roomExist.save();

        userExist.reservations = newReservation._id
        await userExist.save();

        servicesExist.reservations = newReservation._id
        await servicesExist.save();

        res.status(200).send({
            ok: true,
            msg: `La reservacion se a creado correctamente`,
            reservations: newReservation
        });

    }catch(err){
        console.log(err)
        res.status(510).send({
            ok: false,
            msg: `No se podido crear la reservacion`,
            error: err,
        });
    }

}

//-------------------------------------------------read reservation--------------------------------------------------------------

const readReaservation = async(req, res) => {
    try{

        const reservation = await Reservation.find();
        if(!reservation){
            res.status(401).json({
                msg: 'No hay reservaciones disponibles',
                ok: false
            });
        }else{
            res.status(200).json({
                reservaciones: reservation
            });
        }

    }catch(err){
        console.log(err)
        res.status(510).send({
            ok: false,
            msg: `No se podido listar las resevaciones`,
            error: err,
        });
    }
}

//--------------------------------------------------------------Delete reservation-----------------------------------------------

const deleteReservation = async(req, res) => {

    try{



    }catch(err){
        console.log(err)
        res.status(510).send({
            ok: false,
            msg: `No se podido crear la reservacion`,
            error: err
        });

    }
}

//---------------------------------------------exportaciones de las funciones-----------------------------------------------------

module.exports = {
    createReservation
}











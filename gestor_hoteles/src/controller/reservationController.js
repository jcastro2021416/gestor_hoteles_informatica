'use strict'

const User = require('../model/userModel')
const Reservation = require('../model/reservationModel')
const Room = require('../model/roomModel')
const Service = require('../model/serviceModel')

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

//------------------------------------------------------------------update reservation------------------------------------------
/*LA funcion update Reservation esta pendiente por 
problemas que no se lee el .user de la linea 112*/
const updateReservation = async(req, res) => {

    const {user, room, checkIn, checkOut, services, totalPrice, isActive} = req.body;
    const {id} = req.params;

    try{

        const reservation_pasado = await Reservation.findById(id)
        if(!reservation_pasado.user){
            const userAnterior = await User.findById(reservation_pasado.user)
            userAnterior.reservations = null
            await userAnterior.save();
        }

        const userExist = await User.findById(user);

        if(!userExist){
            return res.status(410).json({
                msg: `El usuario no se encuestra existente`,
                msg: `Verificar los datos del usuario`
            });
        }

        const roomExist =  await Room.findById(room);

        if(!roomExist){
            return res.status(410).json({
                msg: `La habitacion no se encuentr existe`,
                msg: `Verifica los datos de la habitacion`
            });
        }

        const servicesExist = await Service.findById(services);

        if(!servicesExist){
            return res.status(410).json({
                msg: `El servicio no se esntra existe`,
                msg: `Revisar los datos del servicio`
            });
        }

        const reservatiComplete = await Reservation.findByIdAndUpdate(
            id,
            {user, room, checkIn, checkOut, services, totalPrice, isActive},
            {new: true}
        );

        userExist.reservations = reservatiComplete._id
        await userExist.save();

        roomExist.reservations = reservatiComplete._id
        await roomExist.save();

        servicesExist.reservations = reservatiComplete._id
        await servicesExist.save();
        
        return res.status(200).json({
            msg: `La reservacion se acualizo de forma exitosa`,
            reservacion: reservatiComplete
        });

    }catch(err){
        console.log(err);
        res.status(500).json({
            msg: 'Error al actualizar la reservacion :('
        });
        throw new Error(err);
    }

}

//--------------------------------------------------------------Delete reservation-----------------------------------------------

const deleteReservation = async(req, res) => {

    const {id} = req.params;
    
    try{

        const reservation = await Reservation.findById(id);
        if(!reservation){
            return res.status(404).json({
                msg: `La reservacion que deseas eliminar no existe`,
                msg:   `Verificar los datos escritos`
            });
        }

        await reservation.remove();

        const user = await User.findOne({reservation: id});

        if(user){
            user.reservations = null 
            await user.save();
        }

        const room = await Room.findOne({room: id});

        if(room){
            room.reservations = null
            await room.save();
        }

        const service = await Service.findOne({service: id});

        if(service){
            service.reservations = null
            await service.save();
        }

        return res.json({
            msg: `Su reservacion a sido eliminada o cancelada de forma existosa`
        });

    }catch(err){
        console.log(err)
        res.status(510).send({
            ok: false,
            msg: `No se podido eliminar o cancelar la reservacion`,
            error: err
        });

    }
}

//---------------------------------------------exportaciones de las funciones-----------------------------------------------------

module.exports = {
    createReservation,
    readReaservation,
    updateReservation,
    deleteReservation
}











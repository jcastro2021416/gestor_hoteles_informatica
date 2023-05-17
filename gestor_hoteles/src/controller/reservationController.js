'use strict'

const User = require('../model/userModel')
const Reservation = require('../model/reservationModel')
const Room = require('../model/roomModel')

//-----------------------------------crud Hoteles------------------------------------------

//-------------------------------------create--------------------------------------------------

const createReservation = async(req, res) => {
    try{
        const idUser =  req.user._id;
        const {room} = req.body;
        let roomExists = await Room.findById(room);
        if(!roomExists){
            res.status(400).send({msg: `La habitación no existe ${room}`});
        }
        let reserve = new Reservation(req.body);
        reserve.user = idUser;
        reserve = await reserve.save();
        
        return res.status(200).send({msg: 'La reservación fue creada con exito.'})

    }catch(err){
        throw new Error(err);
    }

}


const listReservations = async(req, res) => {
    try {
        if (req.user.rol == 'ADMIN','ADMIN_HOTEL') {
            const lreservs = await Reservation.find();
            if(lreservs.length == 0){
                return res.status(500).send({msg: "No se han agregado reservaciones."})
            }
            return res.status(200).send({'Reservaciones': lreservs});
        } else {
            return res.status(400).send({msg: "No tienes permiso para ver las reservaciones."})
        }
    } catch (err) {
        throw new Error(err);
    }
}










module.exports = {
    createReservation, 
    listReservations
};
'use strict'

const User = require('../model/userModel')
const Reservation = require('../model/reservationModel')
const Room = require('../model/roomModel')

//-----------------------------------crud Hoteles------------------------------------------

//-------------------------------------create--------------------------------------------------

const createReservation = async(req, res) => {

    const {user, room, checkIn, checkOut, services, totalPrice, isActive} = req.body

    try{
        const reservation = await Reservation.findOne({})
    }catch(err){

    }

}











'use strict'

const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ReservationSchema = new Schema({
<<<<<<< HEAD
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }],
    room: [{
        type: Schema.Types.ObjectId,
        ref: 'Room',
        required: true,
    }],
=======
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    room: {
        type: Schema.Types.ObjectId,
        ref: 'Room',
        required: true,
    },
>>>>>>> master
    checkIn: {
        type: Date,
        required: true
    },
    checkOut: {
        type: Date,
        required: true,
    },
    services:[{
        type: Schema.Types.ObjectId,
        ref: 'Service',
    }],
    totalPrice: {
        type: Number,
        required: true,
    },
    isActive:{
        type: Boolean,
        default: true,
    }
})

module.exports = mongoose.model('reservation', ReservationSchema)


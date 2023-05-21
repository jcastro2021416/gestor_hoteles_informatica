'use strict'

const mongoose = require("mongoose");
const Schema = mongoose.Schema

const  ServiceSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
<<<<<<< HEAD
    hotel: [{
        type: Schema.Types.ObjectId,
        ref: 'Hotel',
    }],
    reservations: [{
        type: Schema.Types.ObjectId,
        ref: 'Reservation'
    }],
=======
    hotel: {
        tyep: Schema.Types.ObjectId,
        ref: 'Hotel',
    },
    reservations: [{
        type: Schema.Types.ObjectId,
        ref: 'Reservation'
    }]
>>>>>>> master
})

module.exports = mongoose.model('Service', ServiceSchema)


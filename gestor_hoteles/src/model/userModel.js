'use strict'

const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    rol: {
        type: String,
        enum: ['USER', 'ADMIN', 'ADMIN_HOTEL'],
        default: 'USER',
    },
<<<<<<< HEAD
    hotel: [{
        type: Schema.Types.ObjectId,
        ref: 'Hotel'
    }],
    reservations: [{
        type: Schema.Types.ObjectId,
        ref: 'Reservation'
    }],
    service: [{
        type: Schema.Types.ObjectId,
        ref: 'Service'
=======
    hotel: {
        type: Schema.Types.ObjectId,
        ref: 'Hotel'
    },
    reservations: [{
        type: Schema.Types.ObjectId,
        ref: 'Reservation'
>>>>>>> master
    }]
});

module.exports = mongoose.model('User', UserSchema)











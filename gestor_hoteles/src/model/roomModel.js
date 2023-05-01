const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RoomSchema = new Schema({
    numberRoom: {
        type: Number,
        required: true,
    },
    typeRoom: {
        type: String,
        enum:['Individual', 'Double', 'Matrimonial', 'Standar', 'Suite'],
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    hotel: [{
        type: Schema.Types.ObjectId,
        ref: 'Hotel',
        required: true,
    }],
    reservations: [{
        type: Schema.Types.ObjectId,
        ref: 'Reservation',
    }],
    available: {
        type: Boolean,
        default: true,
    },
    available_To: {
        type: Date,
        required: true,
    },
})

module.exports = mongoose.model('Room', RoomSchema)



'ise strict'

const mongoose = require("mongoose")
const Schema = mongoose.Schema

const HotelSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required:true,
    },
    room: [{
        type: Schema.Types.ObjectId,
        ref: 'Room',
    }],
    event: [{
        type: Schema.Types.ObjectId,
        ref: 'Event',
    }],
    admin: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    createAdmin: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('Hotel', HotelSchema)










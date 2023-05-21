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
<<<<<<< HEAD
    service: [{
        type: Schema.Types.ObjectId,
        ref: 'Service',
    }],
=======
>>>>>>> master
    admin: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    createAdmin: {
        type: Date,
        default: Date.now,
<<<<<<< HEAD
    },
    
=======
    }
>>>>>>> master
})

module.exports = mongoose.model('Hotel', HotelSchema)










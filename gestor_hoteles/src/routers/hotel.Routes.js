'use strict'

const {Router} = require('express'); //Contiene metodo http
<<<<<<< HEAD
const {createHotel, updateHotel, readHotel, deleteHotel } = require('../controller/hotelController');
const api = Router();

api.post('/create-hotel', createHotel);
api.put('/update-hotel/:id', updateHotel);
api.get('/read-hotel', readHotel);
api.delete('/delete-hotel/:id', deleteHotel);
=======
const {createHotel, updateHotel } = require('../controller/hotelController');
const api = Router();

api.post('/create-hotel', createHotel);
api.put('/update-hotel/:id', updateHotel)
>>>>>>> master

module.exports = api;
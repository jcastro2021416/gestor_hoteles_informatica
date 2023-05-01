'use strict'

const {Router} = require('express'); //Contiene metodo http
const {createHotel, updateHotel } = require('../controller/hotelController');
const api = Router();

api.post('/create-hotel', createHotel);
api.put('/update-hotel/:id', updateHotel)

module.exports = api;
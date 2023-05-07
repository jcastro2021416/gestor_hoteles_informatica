'use strict'

const {Router} = require('express'); //Contiene metodo http
const { createReservation } = require('../controller/reservationController');
const { readService } = require('../controller/serviceController');
const api = Router();

api.post('/create-reservation', createReservation);
//api.put('/update-hotel/:id', updateHotel);
api.get('/read-reservation', readService);
//api.delete('/delete-hotel/:id', deleteHotel);

module.exports = api;
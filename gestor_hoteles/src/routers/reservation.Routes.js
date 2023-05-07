'use strict'

const {Router} = require('express'); //Contiene metodo http
const { createReservation, updateReservation, deleteReservation } = require('../controller/reservationController');
const { readService } = require('../controller/serviceController');
const api = Router();

api.post('/create-reservation', createReservation);
api.put('/update-reservation/:id', updateReservation);
api.get('/read-reservation', readService);
api.delete('/delete-reservation/:id', deleteReservation);

module.exports = api;
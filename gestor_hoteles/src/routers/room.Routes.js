'use strict'

const {Router} = require('express'); //Contiene metodo http
const { createRoom, updateRoom, readRoom, deleteRoom, agregarRoom } = require('../controller/roomController');
const api = Router();

api.post('/create-room/:id', agregarRoom);
api.put('/update-room/:id', updateRoom);
api.get('/read-room', readRoom);
api.delete('/delete-room/:id', deleteRoom);

module.exports = api;
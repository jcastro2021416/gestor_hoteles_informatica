'use strict'

const {Router} = require('express'); //Contiene metodo http
const { createRoom, updateRoom, readRoom, deleteRoom } = require('../controller/roomController');
const api = Router();

api.post('/create-room', createRoom);
api.put('/update-room/:id', updateRoom);
api.get('/read-room', readRoom);
api.delete('/delete-room/:id', deleteRoom);

module.exports = api;
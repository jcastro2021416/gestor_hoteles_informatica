'use strict'

const {Router} = require('express'); //Contiene metodo http
const { createService, readService, deleteService, updateService } = require('../controller/serviceController');
const api = Router();

api.post('/create-service', createService);
api.get('/read-service', readService);
api.put('/update-service/:id', updateService);
api.delete('/delete-service/:id', deleteService);

module.exports = api;
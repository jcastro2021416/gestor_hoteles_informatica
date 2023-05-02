'use strict'

const {Router} = require('express'); //Contiene metodo http
const { createUser, readUser, updateUser, deleteUser } = require('../controller/userController');
const { asignService } = require('../controller/hotelController');
const api = Router();

api.post('/create-user', createUser);
api.get('/read-user', readUser);
api.put('/update-user/:id', updateUser)
api.delete('/delete-user/:id', deleteUser);
//api.post('/login-user', loginUser);

module.exports = api;

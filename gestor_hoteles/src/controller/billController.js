'use strict'

const Reservation = require('../model/reservationModel');
const User = require('../model/userModel');
const Room = require('../model/roomModel');
const Bill = require('../model/billSchemaModel');
const Service = require('../model/serviceModel');

//---------------------------------addToBil------------------------------------------

const createBill = async (req, res) => {
    try {
      const { reservation, user, room, services } = req.body;
  
      // Validar que se reciban los datos necesarios
      if (!reservation || !user || !room || !services) {
        return res.status(400).json({ message: 'Faltan datos para crear la factura' });
      }
  
      // Validar que la reserva exista en la base de datos
      const reservationExists = await Reservation.findById(reservation);
      if (!reservationExists) {
        return res.status(404).json({ message: 'La reserva no existe' });
      }
  
      // Validar que el usuario exista en la base de datos
      const userExists = await User.findById(user);
      if (!userExists) {
        return res.status(404).json({ message: 'El usuario no existe' });
      }
  
      // Validar que la habitación exista en la base de datos
      const roomExists = await Room.findById(room);
      if (!roomExists) {
        return res.status(404).json({ message: 'La habitación no existe' });
      }
  
      // Calcular el precio total de los servicios
      let servicesTotal = 0;
      services.forEach(service => {
        servicesTotal += service.price * service.quantity;
      });
  
      // Calcular el precio total de las habitaciones
      const roomTotal = roomExists.price * reservationExists.days;
  
      // Calcular el precio total de la factura
      const total = servicesTotal + roomTotal;
  
      // Crear la factura en la base de datos
      const bill = new Bill({ reservation, user, room, services, total });
      await bill.save();
  
      // Responder con la factura creada
      res.status(201).json({ message: 'Factura creada', bill });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error al crear la factura' });
    }
  };


  //--------------------------------------------read----------------------------------------------------------

    const listBills = async (req, res) => {
    try {
        const bills = await Bill.find();
        res.json(bills);
    } catch (err) {
        res.status(500).send({ message: err.message });
        }
    }

//-----------------------------------------delete-------------------------------------------------------

const deleteBill = async (req, res) => {
    try {
      const bill = await Bill.findByIdAndDelete(req.params.id);
      if (!bill) {
        return res.status(404).send({ message: "Factura no encontrada" });
      }
      res.send({ message: "Factura eliminada exitosamente" });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };


module.exports = {createBill, listBills, deleteBill};

//------------------------------------------------edit----------------------------------------------------------------

const editBill = async (req, res) => {
  try {
    const { id } = req.params;
    const { reservation, user, room, services } = req.body;

    // Validar que se reciban los datos necesarios
    if (!reservation || !user || !room || !services) {
      return res.status(400).json({ message: 'Faltan datos para editar la factura' });
    }

    // Validar que la factura exista en la base de datos
    const billExists = await Bill.findById(id);
    if (!billExists) {
      return res.status(404).json({ message: 'La factura no existe' });
    }

    // Validar que la reserva exista en la base de datos
    const reservationExists = await Reservation.findById(reservation);
    if (!reservationExists) {
      return res.status(404).json({ message: 'La reserva no existe' });
    }

    // Validar que el usuario exista en la base de datos
    const userExists = await User.findById(user);
    if (!userExists) {
      return res.status(404).json({ message: 'El usuario no existe' });
    }

    // Validar que la habitación exista en la base de datos
    const roomExists = await Room.findById(room);
    if (!roomExists) {
      return res.status(404).json({ message: 'La habitación no existe' });
    }

    // Calcular el precio total de los servicios
    let servicesTotal = 0;
    services.forEach(service => {
      servicesTotal += service.price * service.quantity;
    });

    // Calcular el precio total de las habitaciones
    const roomTotal = roomExists.price * reservationExists.days;

    // Calcular el precio total de la factura
    const total = servicesTotal + roomTotal;

    // Actualizar la factura en la base de datos
    await Bill.findByIdAndUpdate(id, { reservation, user, room, services, total });

    // Responder con la factura actualizada
    res.status(200).json({ message: 'Factura actualizada' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al editar la factura' });
  }
};







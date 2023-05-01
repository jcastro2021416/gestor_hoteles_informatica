'use strict'

const Service = require('../model/serviceModel')
const User = require('../model/userModel')
const bcrypt = require('bcrypt')

//-------------------------------------Create Service--------------------------------------------

const createService = async(req, res) =>{
    const {name, price, hotel, reservation, userId} = req.body;
        try{
            let service = await Service.findOne({name});
            if(service){
                return res.status(410).json({
                    msg: `Un servicio con este nombre ya existe`,
                    ok: false,
                    service: service,
                });
            }

            service = new Service({name, price, hotel, reservation});
            service = await service.save();

            res.status(200).json({
                msg: `El servicio se a creado de forma correcta`,
                ok: true,
                service: service,
            });
        }catch(err){
            res.status(500).json({
                ok:false,
                msg: 'No se a creado el servicio :(',
                error: err,
            });
        }
    }

//--------------------------------------------list---------------------------------------------

const readService = async(req, res) => {
    try{
        const service = await Service.find()
        if(!service){
            res.status(401).json({
            msg: `No hay servicios disponibles`,
            ok: false
            });
        }else{
            res.status(200).json({servicios: service});
        }
    }catch(err){
        console.log(err)
        throw new Error(err)
    }
}

//--------------------------------------------update service---------------------------------------------

const updateService = async(req, res) => {
    try{
        const id = req.params.id;
        const serviceEdit = {...req.body}
        serviceEdit.password = serviceEdit.password
        ? bcrypt.hashSync(serviceEdit.password, bcrypt.genSaltSync())
        : serviceEdit.password;
        const serviceComplete = await Service.findByIdAndUpdate(id, serviceEdit, {new: true});
        if(serviceComplete){
            return res.status(200).json({
                msg: `El servicio se actualizo de forma correcta`, serviceComplete, 
                ok: true
            });
        }else{
            res.status(404).json({
                msg: `El servicio que desea actualizar, ya no se encuentra existe`,
                ok: false
            });
        }
    }catch(err){
        console.log(err)
        throw new Error(err)
    }
}

//---------------------------------------------delete service--------------------------------------------

const deleteService = async(req ,res) => {
    try{
        const serviceId = req.params.id;
        const result = await Service.findByIdAndDelete(serviceId);
        await result.remove();
        if(!result){
            return res.status(404).json({
                msg: `No existe este servicio :(`,
                ok: false
            });
        }else {
            res.json({
                msg: `Se a eliminado el servicio de forma correcta`, service: result
            });
        }
        
    }catch(err){
        console.log(err)
        throw new Error(err);
    }
}

//----------------------------------------exportaciones-----------------------------------------

    module.exports = {
        createService,
        readService,
        updateService,
        deleteService
    }


'use strict'

const Hotel = require('../model/hotelModel')
const Room = require('../model/roomModel')
const Event = require('../model/eventModel')
const User = require('../model/userModel')

//-------------------------------------------------Crud hoteles ------------------------------------------------------------------

const createHotel = async(req, res) => {
    const {name, description, address, admin} = req.body

    try{
        const hotel = await Hotel.findOne({name});
        if(hotel){
            return res.status(410).json({
                msg: `Ya existe un hotel registrado con este nombre`,
                ok: false,
                hotel: hotel,
            });
        }
        const adminExist = await User.findById(admin);
        if(!adminExist){
            return res.status(400).json({
                msg: 'No se encontro un usuario con este hombre',
                ok: false,
                admin: adminExist,
            });
        }
        //creacion nuevo hotel
        const newHotel = await Hotel.create({name, description, address, admin})

        //Agreagar
        adminExist.hotel = newHotel._id
        await adminExist.save()

        res.status(200).send({
            ok: false,
            msg: `${name} creado correctamente`,
            hotel: newHotel
        });


    }catch(err){
        console.log(err)
        res.status(510).send({
            ok: false,
            msg: `No se podido crear el Hotel: ${name}`,
            error: err,
        });
    }
}

//----------------------------------------update hotel------------------------------------------------

const updateHotel = async(req, res) =>{
        const {name, description, address, admin} = req.body
        const {id} = req.params;
        try{
            const existHotel = await Hotel.findOne({name});

            if(existHotel && existHotel._id != id){
                return res.status(400).json({
                    msg: 'El nombre del hotel ya existe'
                });
            }
            const hotel_pasado = await Hotel.findById(id);

            if(!hotel_pasado.admin){
                const admistradorAnterior = await User.findById(hotel_pasado.admin)
                admistradorAnterior.hotel = null
                await admistradorAnterior.save();
            }
            const adminExist = await User.findById(admin);
            if(!adminExist){
                return res.status(410).json({
                    msg: 'El usuario admin no es existente'
                });
            }   

            const hotelComplete = await Hotel.findByIdAndUpdate(
                id,
                {name, description, address, admin},
                {new: true}
                );

                adminExist.hotel = hotelComplete._id
                await adminExist.save();
                return res.status(200).send({
                    msg: 'Hotel actualizado de forma exitosa :)',
                    hotel: hotelComplete
                });
        }catch(error){
            console.error(error)
            res.status(500).json({
                msg: 'Error al actualizar el hotel'
            })
        }
    }

//--------------------------------------------delete hotel---------------------------------------------

const deleteHotel = async(req, res) => {
    const {id} = req.params;
    try{
        const Hotel = await Hotel.findById(id);
        if(!hotel){
            if(!hotel){
                return res.status(404).json({
                    msg: 'El hotel que desea eliminar no existe'
                });
            }
        }
        await hotel.remove();

        const administrador = await User.findOne({hotel: id});
        if(administrador){
            administrador.hotel = null
            await administrador.save();
        }

        return res.json({
            msg: 'El hotel se a eliminado de fomra correcta'
        })
    }catch(err){
        console.log(err);
        res.status(500).json({msg: 'A ocurrido error al elimar el hotel'})
    }
}

//-------------------------------------exportaciones del COntroller------------------------------------

module.exports = {
    createHotel,
    updateHotel,
    deleteHotel
}



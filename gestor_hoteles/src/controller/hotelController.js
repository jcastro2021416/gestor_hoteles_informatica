'use strict'

<<<<<<< HEAD
const Hotel = require('../model/hotelModel');
const User = require('../model/userModel');
const Room = require('../model/roomModel');
const Event = require('../model/eventModel');
const Service = require('../model/serviceModel');

//-------------------------------------------------Crud hoteles ------------------------------------------------------------------
const createHotel = async(req, res) => {
    const {name,address, admin} = req.body
=======
const Hotel = require('../model/hotelModel')
const Room = require('../model/roomModel')
const Event = require('../model/eventModel')
const User = require('../model/userModel')

//-------------------------------------------------Crud hoteles ------------------------------------------------------------------

const createHotel = async(req, res) => {
    const {name, description, address, admin} = req.body
>>>>>>> master

    try{
        const hotel = await Hotel.findOne({name});
        if(hotel){
            return res.status(410).json({
                msg: `Ya existe un hotel registrado con este nombre`,
                ok: false,
                hotel: hotel,
            });
        }
<<<<<<< HEAD
        
        const adminExist = await User.findById(admin);
        if(!adminExist){
            return res.status(400).json({
                msg: 'No se encontro administrado con este Id',
=======
        const adminExist = await User.findById(admin);
        if(!adminExist){
            return res.status(400).json({
                msg: 'No se encontro un usuario con este hombre',
>>>>>>> master
                ok: false,
                admin: adminExist,
            });
        }
<<<<<<< HEAD

        /*const roomExist = await Room.findById(room);
        if(!roomExist){
            return res.status(400).json({
                msg: 'No se encontro un administrador con este Id',
                ok: false,
                room: roomExist,
            });
        }

        const eventExist = await Event.findById(event);
        if(!eventExist){
            return res.status(400).json({
                msg: `No se encontro evento con este Id`,
                ok: false,
                event: eventExist,
            });
        }

        const serviceExist = await Service.findById(service);
        if(!serviceExist){
            return res.status(400).json({
                msg: `No se encontro service con este Id`,
                ok: false,
                service: serviceExist,
            });
        }*/
        //creacion nuevo hotel
        const newHotel = await Hotel.create({name,address, admin})
=======
        //creacion nuevo hotel
        const newHotel = await Hotel.create({name, description, address, admin})
>>>>>>> master

        //Agreagar
        adminExist.hotel = newHotel._id
        await adminExist.save()

        res.status(200).send({
<<<<<<< HEAD
            ok: true,
=======
            ok: false,
>>>>>>> master
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
<<<<<<< HEAD
//-------------------------------------------read hotel--------------------------------------------

const readHotel = async(req, res) =>{
    try{
        const hotel = await Hotel.find();
        if(!hotel){
            res.status(410).send({
                msg: 'No hay Hoteles disponibles dentro de la base de datos'
            });
        }else{
            res.status(200).send({
                hoteles_obtenidos: hotel
            });
        }
    }catch(err){
        throw new Error('Error al mostrar todos los hoteles')
    }
}

//----------------------------------------update hotel------------------------------------------------

const updateHotel = async(req, res) => {
    const {name, description, address, admin} = req.body;
    const {id} = req.params;

    try{
        //Verificar si el hotel ya existe 
        const hotelExist = await Hotel.findOne({name});
        
        if(hotelExist && hotelExist._id != id){
            return res.status(400).json({
                msg: 'El nombre ya existe'
            })
        }

        // Obtener el hotel anterior
        const hotelAnterior = await Hotel.findById(id);

        // Buscar y actualizar el admin anterior
        if (hotelAnterior && hotelAnterior.admin) {
        const adminAnterior = await User.findById(hotelAnterior.admin);
        adminAnterior.hotel = null;
        await adminAnterior.save();
        }

            // Verificar si el usuario a cambiar existe  
            const adminExist = await User.findById(admin);

            if(!adminExist){
                return res.status(400).json({
                    msg: 'El usuario admin no existe'
                })
            }

            //Actualizar los datos del hotel 
            const hotelActualizado = await Hotel.findByIdAndUpdate(
                id, 
                {name, description, address, admin}, 
                {new: true}
            );

            // Actualizar el hotel en la lista de hoteles del usuario admin 
            adminExist.hotel = hotelActualizado._id;
            await adminExist.save();

            return res.status(200).send({
                msg: 'Hotel actualizado correctamente', 
                hotel: hotelActualizado
            });
        }catch(err){
            console.error(err)
            res.status(500).json({
                msg: 'Error al actualizar el hotel'
            });
=======

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
>>>>>>> master
        }
    }

//--------------------------------------------delete hotel---------------------------------------------

const deleteHotel = async(req, res) => {
    const {id} = req.params;
<<<<<<< HEAD
    const {name} = req.body;
    
    try{
        const hotel = await Hotel.findById(id);
=======
    try{
        const Hotel = await Hotel.findById(id);
>>>>>>> master
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
<<<<<<< HEAD
            msg: 'El hotel se a eliminado de forma correcta'
        })
    }catch(err){
        console.log(err);
        res.status(500).json({msg: `A ocurrido error al eliminar el hotel ${name}`})
    }
}


=======
            msg: 'El hotel se a eliminado de fomra correcta'
        })
    }catch(err){
        console.log(err);
        res.status(500).json({msg: 'A ocurrido error al elimar el hotel'})
    }
}

>>>>>>> master
//-------------------------------------exportaciones del COntroller------------------------------------

module.exports = {
    createHotel,
    updateHotel,
<<<<<<< HEAD
    readHotel,
=======
>>>>>>> master
    deleteHotel
}



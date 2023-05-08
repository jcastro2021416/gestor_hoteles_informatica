'use strict'

const Hotel = require('../model/hotelModel');
const User = require('../model/userModel');

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
                msg: 'No se encontro administrado con este Id',
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
            ok: true,
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
        if (hotelAnterior.admin) {
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
        }
    }

//--------------------------------------------delete hotel---------------------------------------------

const deleteHotel = async(req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    
    try{
        const hotel = await Hotel.findById(id);
        if(!Hotel){
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
            msg: 'El hotel se a eliminado de forma correcta'
        })
    }catch(err){
        console.log(err);
        res.status(500).json({msg: `A ocurrido error al eliminar el hotel ${name}`})
    }
}


//-------------------------------------exportaciones del COntroller------------------------------------

module.exports = {
    createHotel,
    updateHotel,
    readHotel,
    deleteHotel
}



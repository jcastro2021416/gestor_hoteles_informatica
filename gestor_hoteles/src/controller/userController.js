'use strict'

const { generateJWT } = require('../helpers/create-jwt');
const User = require('../model/userModel')
const bcrypt = require('bcrypt')

//-------------------------------------Create Usuario--------------------------------------
const createUser = async(req, res) => {
    const {name, email, password} = req.body;
    try{
        let usuario = await User.findOne({email});
        if(usuario){
            return res.status(400).send({
                msg: "Un usuario ya se a registrado con este correo electronico",
                ok: false,
                usuario: usuario,
            });
        }
        usuario = new User(req.body)

        const salt = bcrypt.genSaltSync()
        usuario.password = bcrypt.hashSync(password, salt);

        usuario = await usuario.save();

        res.status(210).send({
            msg: `El usuario ${name} se creo de forma correcta`,
            ok: true,
            usuario: usuario,
        });

    }catch(err){
        console.log(err)
        res.status(510).send({
            ok: false,
            msg: `No se podido crear el usuario: ${name}`,
            error: err,
        })
    }
}

//----------------------------------------------------read usuario -------------------------------------------------------

const readUser = async(req, res) => {
    try{
        const user = await User.find();
        if(!user){
<<<<<<< HEAD
            res.status(410).send({
                msg: 'No hay usuario disponible dentro de la db'
            });
        }else{
            res.status(200).send({usuarios_obtenidos: user});
=======
            re.statu(410).send({
                msg: 'No hay usuario disponible dentro de la db'
            });
        }else{
            res.status(200).send({alumno_obtenidos: user});
>>>>>>> master
        }

    }catch(err){
        throw new Error('Error al listar usuarios');
    }
}

//------------------------------------------------------update usuarios--------------------------------------------------

const updateUser = async(req, res) => {
    try{
        const id = req.params.id
        const userEdit = {...req.body}
        userEdit.password = userEdit .password
        ? bcrypt.hashSync(userEdit.password, bcrypt.genSaltSync())
        : userEdit.password;
        const userComplete = await User.findByIdAndUpdate(id, userEdit, {new: true});
        if(userComplete){
<<<<<<< HEAD
            //const token = await generateJWT(userComplete.id, userComplete.name, userComplete.email)
            return res.status(200).send({
                msg: `El usuario se actualizo de forma correcta`, userComplete, //token
            });
        }else{
            res.status(404).send({
                msg: `El usuario que desea actualizar no existe dentro de nuestra db`
=======
            const token = await generateJWT(userComplete.id, userComplete.name, userComplete.email)
            return res.statu(200).send({
                msg: `El usuario se actualizo de forma correcta`, userComplete, token
            });
        }else{
            res.status(404).send({
                msg: `El usuario que desea actualizar con existe dentro de nuestra db`
>>>>>>> master
            });
        }
        
    }catch(err){
        throw new Error(err)
    }
}

//------------------------------------------------------delete usuarios--------------------------------------------------

const deleteUser = async(req, res) => {
    try{
        const userId = req.params.id
        const client = await User.findById(userId);
        if(!client){
            return res.status(404).json({msg: 'El cliente no se a encontrado'})
        }
        await client.remove();
        
        res.status(410).json({
            msg: 'El cliente se elimno de forma correcta ', user: client
        });
    }catch(err){
        throw new Error(err)
    }
}

//-----------------------------------------------------login----------------------------------------------------------------
const loginUser = async(req, res)=>{
    const {email, password}=req.body; //Datos que vamos a comparar para ver si son correctos
    try{
        const user = await Usuarios.findOne({email});
        if(!user){
            return res.status(400).send({
                ok: false, 
                message: 'El usario no existe'}) 
            }      
        const validPassword = bcrypt.compareSync(password/*El que nostros enviamos*/, 
        user.password/*password registrado en la base de datos*/);
        if(!validPassword){
            return res.status(400).send({ok: false, message: 'constraseña incorrecta'})
        }
        const token = await generateJWT(user.id, user.username, user.email);
        res.json({
            ok: true,
            uid: user.id,
            name: user.username,
            email: user.email,
            token,
            
            msg: `Bienvenido ${user.username}`
        })
    }catch(err){
        throw new Error(err);
    }
}

<<<<<<< HEAD


=======
>>>>>>> master
//--------------------------------------------------exportaciones de modulos------------------------------------------------------

module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUser
}






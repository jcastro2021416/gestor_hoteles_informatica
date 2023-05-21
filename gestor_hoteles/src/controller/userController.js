'use strict'

const { generateJWT } = require('../helpers/create-jwt');
const User = require('../model/userModel')
const bcrypt = require('bcrypt')


//funcion para crear un usuario por defecto
// const adminApp = async (req, res) => {
//     try {
//       let user = new User();
//       user.name = "ElAdm";
//       user.email = "ElAdmin@gmail.com";
//       user.password = "123456";
//       user.rol = "ADMIN";
//       const userEncontrado = await User.findOne({ email: user.email });
//       if (userEncontrado) return console.log("El administrador está listo");
//       user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync());
//       user = await user.save();
//       if (!user) return console.log("El administrador no está listo!");
//       return console.log("El administrador está listo!");
//     } catch (err) {
//       throw new Error(err);
//     }
// };

//-------------------------------------Create Usuario--------------------------------------
const createUser = async(req, res) => {
    // Unicamente los usuarios de la aplicación tiene permiso hacia el Crud de usuarios
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
    if (req.user.rol === 'ADMIN') {
        try{
            const user = await User.find();
            if(!user){
                res.status(410).send({
                    msg: 'No hay usuario disponible dentro de la db'
                });
            }else{
                res.status(200).send({usuarios_obtenidos: user});
            }
    
        }catch(err){
            throw new Error('Error al listar usuarios');
        }
        
    } else {
        res.status(200).send({
            msg: 'No tienes permisos para realizar esta acción ;D'
        })
    }

    
}

//------------------------------------------------------update usuarios--------------------------------------------------

const updateUser = async(req, res) => {
    try{
        let id;

        //Verifica que el usuario que intenta editar sea un Admin
        if (req.user.rol === 'ADMIN') {
            id = req.body.idUserEdit

            let roleEdit = await User.findById(id);

            if (roleEdit.rol == 'ADMIN') {
                return res.status(400).send({
                    ok: false,
                    msg:'No puedes editar a otros usuarios de rol ADMIN'
                })
            }

        } else {
            //Si no es un admin unicamente podra editar su perfil
            id = req.userDifferent._id;
        }
        const userEdit = {...req.body}
        //Encriptación de la contraseña
        userEdit.password = userEdit .password
        ? bcrypt.hashSync(userEdit.password, bcrypt.genSaltSync())
        : userEdit.password;

        const userComplete = await User.findByIdAndUpdate(id, userEdit, {new: true});
        if(userComplete){
            const token = await generateJWT(userComplete.id, userComplete.name, userComplete.email)
            return res.status(200).send({
                msg: `El usuario se actualizo de forma correcta`, userComplete, token,
            });
        }else{
            res.status(404).send({
                msg: `El usuario que desea actualizar no existe dentro de nuestra db`
            });
        }
        
    }catch(err){
        throw new Error(err)
    }
}

//------------------------------------------------------delete usuarios--------------------------------------------------

const deleteUser = async(req, res) => {
    let id;
    try{
        if (req.user.rol === 'ADMIN') {
            id = req.body.idUserRemove;

            const client = await User.findById(id);
            if(!client){
                return res.status(404).json({msg: 'El cliente no se a encontrado'})
            }
            //Mira si el usuario que se quiere eliminar no sea un 
            if (client.rol == 'ADMIN') {
                return res.status(400).send({
                    ok: false,
                    msg: 'No puedes editar un usario que sea admin'
                });
            }

        } else {
            //En caso que no sea el admin de la aplicación hara que él usuario logueado elimine la cuenta
            id = req.user._id;
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



//--------------------------------------------------exportaciones de modulos------------------------------------------------------

module.exports = {
    // adminApp,
    createUser,
    readUser,
    updateUser,
    deleteUser
}






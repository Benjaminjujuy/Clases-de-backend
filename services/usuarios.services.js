const { registroUsuario } = require("../helpers/mensajes")
const usuarioModel = require("../models/usuario.schema")
const bcrypt = require(`bcrypt`)
const jwt = require(`jsonwebtoken`)


 const nuevoUsuario = async(body) => {
    try {
        const usuarioExiste = await usuarioModel.findOne({nombreUsuario: body.nombreUsuario})

        if(usuarioExiste){
            return 400
        }

        if(body.rol !== `usuario` && body.rol !== `admin`){
            return 409
        }

        let salt = bcrypt.genSaltSync();
        body.contrasenia = bcrypt.hashSync(body.contrasenia, salt);


        registroUsuario()
        const usuario = new usuarioModel(body)
        await usuario.save()
        return 201
    } catch (error) {
        console.log(error)
    }
 }

 const inicioSesion = async(body) => {
    try {
        const usuarioExiste = await usuarioModel.findOne({nombreUsuario: body.nombreUsuario})

        if(!usuarioExiste){
            return { code: 400 }
        }

        const verificacionContrasenia = bcrypt.compareSync(body.contrasenia, usuarioExiste.contrasenia)

        if(verificacionContrasenia){

            const payload = {
                _id: usuarioExiste._id,
                rol: usuarioExiste.rol,
                bloqueado: usuarioExiste.bloqueado
            }

            const token = jwt.sign(payload, process.env.JWT_SECRET)

            return {
                code: 200,
                token
            }

        }else{
            return { code: 400 } 
        }

    } catch (error) {
        console.log(error)
    }
 }

 const obtenerTodosLosUsuarios = async() => {
    try {
        const usuarios = await usuarioModel.find()
        return usuarios
    } catch (error) {
        console.log(error)
    }
 }

 const obtenerUnUsuario = async(idUsuario) => {
    try {
        const usuario = await usuarioModel.findOne({_id: idUsuario})
        return usuario
    } catch (error) {
        console.log(error)
    }
 }

 const bajaUsuarioFisica = async(idUsuario) => {
        await usuarioModel.findOneAndDelete({_id: idUsuario})
        return 200
 }

 const bajaUsuarioLogica = async(idUsuario) => {
    const usuario = await usuarioModel.findOne({_id: idUsuario})
    usuario.bloqueado = !usuario.bloqueado

    const actualizarUsuario = await usuarioModel.findOneAndUpdate({_id: idUsuario}, usuario, {new:true})
    return actualizarUsuario
 }

 module.exports = {
    nuevoUsuario,
    inicioSesion,
    obtenerTodosLosUsuarios,
    obtenerUnUsuario,
    bajaUsuarioFisica,
    bajaUsuarioLogica,
 }
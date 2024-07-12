/*const usuarios = [
    {
     id: 1,
     nombreDelUsuario: `benja2024`,
     emailDelUsuario: `benjajuarez@gmail.com`,
     contrasenia: `123456789`
    }
 ]*/

const usuarioModel = require("../models/usuario.schema")

 const nuevoUsuario = async(body) => {
    try {
        const usuario = new usuarioModel(body)
        await usuario.save()
        return 201
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
    obtenerTodosLosUsuarios,
    obtenerUnUsuario,
    bajaUsuarioFisica,
    bajaUsuarioLogica,
 }
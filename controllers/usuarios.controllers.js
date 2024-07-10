const serviceUsuario = require(`../services/usuarios.services`)

const registrarUsuario = (req, res) => {
try {
const res = serviceUsuario.nuevoUsuario(req.body)
if(res === 201){
    res.status(201).json({msg: "usuario registrado correctamente"})
}
} catch (error) {
    console.log(error)
}}

const obtenerTodosLosUsuarios = (req, res) => {
    try {
        const usuarios = serviceUsuario.obtenerTodosLosUsuarios()
        res.status(200).json(usuarios)
    } catch (error) {
        console.log(error)
    }
}

const obtenerUnUsuario = (req, res) => {
    try {
        const usuario = serviceUsuario.obtenerUnUsuario(req.params.idUsuario)
        res.status(200).json({msg:`Usuario encontrado`, usuario})
    } catch (error) {
        console.log(error)
    }
}

const bajaFisicaUsuario = (req, res) => {
    try {
        const res = serviceUsuario.bajaUsuarioFisica(req.params.idUsuario)
        if(res === 200){
        res.status(200).json({msg:`Usuario borrado con exito`})
        }
    } catch (error) {
        console.log(error)
    }
}

const bajaLogicaUsuario = (req, res) => {
    try {
        const res = serviceUsuario.bajaUsuarioLogica(req.params.idUsuario)
        res.status(200).json({msg: res})
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    registrarUsuario,
    obtenerTodosLosUsuarios,
    obtenerUnUsuario,
    bajaFisicaUsuario,
    bajaLogicaUsuario
}
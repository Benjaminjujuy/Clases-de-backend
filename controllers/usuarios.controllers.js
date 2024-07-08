const serviceUsuario = require(`../services/usuarios.services`)

const registrarUsuario = (req, res) => {
try {
const res = serviceUsuario
res.status(200).json({msg: "usuario registrado correctamente"})

} catch (error) {
    console.log(error)
}
}

const obtenerTodosLosUsuarios = (req, res) => {
    try {
        res.status(200).json(usuarios)
    } catch (error) {
        console.log(error)
    }
}

const obtenerUnUsuario = (req, res) => {
    try {
        const id = Number(req.params.idUsuario)
        const usuario = usuarios.find((user) => user.id === id)

        if(!usuario){
            return res.status(400).json({msg:`Usuario no encontrado`})
        } 

        res.status(200).json({msg:`Usuario encontrado`, usuario})
    } catch (error) {
        console.log(error)
    }
}

const bajaFisicaUsuario = (req, res) => {
    try {
        const id = req.params.idUsuario
        const posicionDelUsuario = usuarios.findIndex((usuario) => usuario.id === id)
        usuarios.splice(posicionDelUsuario, 1)

        res.status(200).json(usuarios)
    } catch (error) {
        console.log(error)
    }
}

const bajaLogicaUsuario = (req, res) => {
    try {
        const id = req.params.idUsuario
        const posicionDelUsuario = usuarios.findIndex((usuario) => usuario.id === id)
        usuarios[posicionDelUsuario].baja = !usuarios[posicionDelUsuario].baja
        const mensaje = usuarios[posicionDelUsuario].baja ? `Usuario bloqueado` : `Usuario activo`
        res.status(200).json({msg: mensaje})
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
const { Schema, model } = require(`mongoose`)

const usuarioSchema = new Schema({
    nombreUsuario: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    contrasenia: {
        type: String,
        required: true,
        trim: true
    },

    rol: {
        type: String,
        default: `usuario`, 
    },

    bloqueado: {
        type: Boolean,
        default: false,
    }
})


const usuarioModel = model(`user`, usuarioSchema)
module.exports = usuarioModel
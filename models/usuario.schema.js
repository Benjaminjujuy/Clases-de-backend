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
        enum:[`usuario`, `admin`]
    },

    bloqueado: {
        type: Boolean,
        default: false,
    }
})

usuarioSchema.methods.toJSON = function(){
    const { contrasenia, __v, ...usuario} = this.toObject()
    return usuario
}


const usuarioModel = model(`user`, usuarioSchema)
module.exports = usuarioModel
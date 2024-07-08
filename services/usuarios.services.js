const usuarios = [
    {
     id: 1,
     nombreDelUsuario: `benja2024`,
     emailDelUsuario: `benjajuarez@gmail.com`,
     contrasenia: `123456789`
    }
 ]


 const nuevoUsuario = (body) => {
    try {
        const emailExiste = usuarios.find((usuario) => usuario.emailDelUsuario === body.emailDelUsuario)
        const usuarioExiste = usuarios.find((usuario) => usuario.nombreDelUsuario === body.nombreDelUsuario)
    
        if(emailExiste){
            return res.status(400).json({msg: "Email no disponible"})
           } else if(usuarioExiste){
        return res.status(400).json({msg: "Usuario no disponible"})
           }
    
    const id = crypto.randomUUID()
    usuarios.push({id, baja: false, ...body})

    return 201
    } catch (error) {
        console.log(error)
    }
 }
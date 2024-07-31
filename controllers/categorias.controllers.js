const seviciosCategorias = require(`../services/categorias.services`)


const obtenerLasCategorias = async (req,res) => {
 try {
    
 } catch (error) {
    console.log(error)
 }
}

const obtenerCategoria = async (req,res) => {
    try {
    
    } catch (error) {
       console.log(error)
    }
}

const crearCategoria = async (req,res) => {
    try {
    const categoria = await serviciosCategorias.nuevaCategoria(req.body)
    } catch (error) {
       console.log(error)
    }
}

const actualizarCategoria = async (req,res) => {
    try {
    
    } catch (error) {
       console.log(error)
    }
}

const eliminarCategoria = async (req,res) => {
    try {
    
    } catch (error) {
       console.log(error)
    }
}




module.exports ={
 obtenerLasCategorias,
 obtenerCategoria,
 crearCategoria,
 actualizarCategoria,
 eliminarCategoria
}
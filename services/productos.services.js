/*let productos = [
    {
        id:1,
        nombre: `celular`,
        precio: 10000
    },
    {
        id:2,
        nombre: `tablet`,
        precio: 20000
    }
  ]*/
const ProductModel = require(`../models/producto.schema`) 

  const obtenerTodosLosProductos = async() => {
    const obtenerProductos = await ProductModel.find()
    return obtenerProductos
  }

  const obtenerUnProducto = async(id) => {
    const producto = await ProductModel.findOne({_id: id}) 
    return producto
  }

  const nuevoProducto = (body) => {
    try {
      const newProduct = new ProductModel(body)
      return newProduct
        /*const nuevoProducto = {
            id: productos[productos.length-1].id + 1,
            ...body
        }
        productos.push(nuevoProducto)
        return nuevoProducto*/
    } catch (error) {
        console.log(error)
    }
  }

  const editarProducto = async(idProducto, body) => {
    try {
      const productoEditado = await ProductModel.findByIdAndUpdate({_id: idProducto}, body, {new: true })
      return productoEditado
    } catch (error) {
        console.log(error)
    }
  }

const eliminarProducto = async(idProducto) => {
    try {
      await ProductModel.findByIdAndDelete({_id: idProducto})
      return 200
    } catch (error) {
        console.log(error)
    }
}


  module.exports = {
    obtenerTodosLosProductos,
    obtenerUnProducto,
    nuevoProducto,
    editarProducto,
    eliminarProducto
  }


const ProductModel = require(`../models/producto.schema`) 
const cloudinary = require(`../helpers/cloudinary`)

  const obtenerTodosLosProductos = async(limit, to) => {
    const[ productos, cantidadTotal ] = await Promise.all([
      ProductModel.find({activo: true}).skip(to * limit).limit(limit),
      ProductModel.countDocuments({activo: true})
    ])

    const paginacion = {
      productos,
      cantidadTotal
    }
    return paginacion
  }

  const obtenerUnProducto = async(id) => {
    const producto = await ProductModel.findOne({_id: id}) 
    return producto
  }

  const buscarProducto = (termino) => {
    
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

const agregarImagen = async(idProducto, file) => {
  const producto = await ProductModel.findOne({_id: idProducto})
  const resultado = await cloudinary.uploader.upload(file.path)

  producto.imagen = resultado.secure_url
  await producto.save()

  return 200
}


  module.exports = {
    obtenerTodosLosProductos,
    obtenerUnProducto,
    nuevoProducto,
    editarProducto,
    eliminarProducto,
    agregarImagen
  }


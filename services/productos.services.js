let productos = [
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
  ]


  const obtenerTodosLosProductos = () => {
    return productos
  }

  const obtenerUnProducto = (id) => {
    const producto = productos.find((prod) => prod.id ===id)
    return producto
  }

  const nuevoProducto = (body) => {
    try {
        const nuevoProducto = {
            id: productos[productos.length-1].id + 1,
            ...body
        }
        productos.push(nuevoProducto)
        return nuevoProducto
    } catch (error) {
        console.log(error)
    }
  }

  const editarProducto = (idProducto) => {
    try {
        const posicionProductoEnElArray = productos.findIndex((producto) => producto.id === idProducto)
          const productoEditado = {
            id, 
            ...req.body
          }
          productos[posicionProductoEnElArray] = productoEditado
          return productoEditado
    } catch (error) {
        console.log(error)
    }
  }

const eliminarProducto = (idProducto) => {
    try {
        const posicionProductoEnElArray = productos.findIndex((producto) => producto.id !==idProducto)
        productos.splice(posicionProductoEnElArray, 1)
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


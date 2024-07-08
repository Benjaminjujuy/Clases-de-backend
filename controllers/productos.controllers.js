const servicioProductos = require(`../services/productos.services`)


const obtenerUnProductoPorIdOTodos = (req,res) => {
    try {
      const id = Number(req.query.id)
    
    if(id){
        const producto = servicioProductos.obtenerUnProducto(id)
        res.status(200).json(producto)
    } else {
        const productos = servicioProductos.obtenerTodosLosProductos()
        res.status(200).json(productos)
    }  
    } catch (error) {
       res.status(500).json(error) 
    }   
    } 

    const crearProducto = (req,res) =>{
        try {
          const nuevoUsuario = servicioProductos.nuevoProducto(req.body)
          res.status(201).json(nuevoUsuario)
        } catch (error) {
          res.status(500).json(error) 
        }  
      }

      const editarProductoPorId = (req,res) => {
        try {
          const id = Number(req.params.idProducto)
          const productoActualizado = servicioProductos.editarProducto(id)
          res.status(200).json(productoActualizado)
        } catch (error) {
          res.status(500).json(error) 
        }
      }

      const eliminarProductoPorId = (req,res) => {
        try {
          const id = Number(req.params.idProducto)
          let res = servicioProductos.eliminarProducto(id)
          if(res === 200){
            res.status(200).json({msg: `Producto eliminado`})
          }
          
        } catch (error) {
          res.status(500).json(error) 
        }
      }

    module.exports = {
        obtenerUnProductoPorIdOTodos,
        crearProducto,
        editarProductoPorId,
        eliminarProductoPorId
    }
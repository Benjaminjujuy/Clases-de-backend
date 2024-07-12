const servicioProductos = require(`../services/productos.services`)


const obtenerUnProductoPorIdOTodos = async(req,res) => {
    try {
      const id = req.query.id
    
    if(id){
        const producto = await servicioProductos.obtenerUnProducto(id)
        res.status(200).json(producto)
    } else {
        const productos = await servicioProductos.obtenerTodosLosProductos()
        res.status(200).json(productos)
    }  
    } catch (error) {
       res.status(500).json(error) 
    }   
    } 

    const crearProducto = async (req, res) =>{
        try {
          const nuevoProducto = await servicioProductos.nuevoProducto(req.body)
          await nuevoProducto.save()
          res.status(201).json(nuevoProducto)

        } catch (error) {
          res.status(500).json(error) 
        }  
      }

      const editarProductoPorId = async(req,res) => {
        try {
          const id = req.params.idProducto
          const productoActualizado = await servicioProductos.editarProducto(id, req.body)
          res.status(200).json(productoActualizado)
        } catch (error) {
          res.status(500).json(error) 
        }
      }

      const eliminarProductoPorId = async(req,res) => {
        try {
          const id = req.params.idProducto
          let res = await servicioProductos.eliminarProducto(id)
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
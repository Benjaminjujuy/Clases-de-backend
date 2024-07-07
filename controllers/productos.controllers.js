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



const obtenerUnProductoPorIdOTodosPorId = (req,res) => {

    try {
      const id = Number(req.query.id)
    
    if(id){
        const producto = productos.find((prod) => prod.id ===id)
        res.status(200).json(producto)
    } else {
        res.status(200).json(productos)
    }  
    } catch (error) {
       res.status(500).json(error) 
    }   
    } 

    const crearProducto = (req,res) =>{
        try {
          const nuevoProducto = {
              id: productos[productos.length-1].id + 1,
              ...req.body
          }
  
          productos.push(nuevoProducto)
  
          res.status(201).json(nuevoProducto)
        } catch (error) {
          res.status(500).json(error) 
        }  
      }

      const editarProductoPorId = (req,res) => {
        try {
          const id = Number(req.params.idProducto)
          const posicionProductoEnElArray = productos.findIndex((producto) => producto.id === id)
  
          const productoEditado = {
            id, 
            ...req.body
          }

          productos[posicionProductoEnElArray] = productoEditado
  
          res.status(200).json(productos[posicionProductoEnElArray])
        } catch (error) {
          res.status(500).json(error) 
        }
      }

      const eliminarProductoPorId = (req,res) => {
        try {
          const id = Number(req.params.idProducto)
          const productosNoBorrados = productos.filter((producto) => producto.id !==id)
          productos = productosNoBorrados
          res.status(200).json(productos)
        } catch (error) {
          res.status(500).json(error) 
        }
      }

    module.exports = {
        obtenerUnProductoPorIdOTodosPorId,
        crearProducto,
        editarProductoPorId,
        eliminarProductoPorId
    }
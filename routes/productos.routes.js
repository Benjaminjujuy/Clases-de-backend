const express = require(`express`)
const { obtenerUnProductoPorIdOTodosPorId, crearProducto, editarProductoPorId, eliminarProductoPorId } = require("../controllers/productos.controllers")
const router = express.Router()



router.get(`/`, obtenerUnProductoPorIdOTodosPorId) 
     
router.post(`/`, crearProducto ) 

router.put(`/:idProducto`, editarProductoPorId )

router.delete(`/:idProducto`, eliminarProductoPorId )

module.exports = router
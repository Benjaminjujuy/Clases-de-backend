const express = require(`express`)
const { obtenerUnProductoPorIdOTodosPorId, crearProducto, editarProductoPorId, eliminarProductoPorId, obtenerUnProductoPorIdOTodos } = require("../controllers/productos.controllers")
const router = express.Router()



router.get(`/`, obtenerUnProductoPorIdOTodos) 
     
router.post(`/`, crearProducto ) 

router.put(`/:idProducto`, editarProductoPorId )

router.delete(`/:idProducto`, eliminarProductoPorId )

module.exports = router
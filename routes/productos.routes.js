const express = require(`express`)
const { obtenerUnProductoPorIdOTodos, crearProducto, editarProductoPorId, eliminarProductoPorId,} = require("../controllers/productos.controllers")
const { check } = require("express-validator")
const router = express.Router()



router.get(`/`, obtenerUnProductoPorIdOTodos) 
     
router.post(`/`,[
    check(`nombre`,`campo NOMBRE vacio`).not().isEmpty(),
    check(`precio`, `campo PRECIO vacio`).not().isEmpty(),
    check(`descripcion`, `campo DESCRIPCION vacio`).not().isEmpty(),
],crearProducto ) 

router.put(`/:idProducto`,[
    check(`nombre`,`campo NOMBRE vacio`).not().isEmpty(),
    check(`precio`, `campo PRECIO vacio`).not().isEmpty(),
    check(`descripcion`, `campo DESCRIPCION vacio`).not().isEmpty()
],editarProductoPorId )

router.delete(`/:idProducto`, eliminarProductoPorId )

module.exports = router
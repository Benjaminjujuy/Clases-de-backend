const express = require(`express`)
const { obtenerUnProductoPorIdOTodos, crearProducto, editarProductoPorId, eliminarProductoPorId, agregarImagenProductoPorId,} = require("../controllers/productos.controllers")
const { check } = require("express-validator")
const auth = require("../middlewares/auth")
const multer = require("../middlewares/multer")
const router = express.Router()



router.get(`/`, obtenerUnProductoPorIdOTodos) 
     
router.post(`/`,[
    check(`nombre`,`campo NOMBRE vacio`).not().isEmpty(),
    check(`precio`, `campo PRECIO vacio`).not().isEmpty(),
    check(`descripcion`, `campo DESCRIPCION vacio`).not().isEmpty(),
], auth(`admin`), crearProducto ) 

router.post(`/agregarImagen/:idProducto`, multer.single(`imagen`),agregarImagenProductoPorId)

router.put(`/:idProducto`,[
    check(`nombre`,`campo NOMBRE vacio`).not().isEmpty(),
    check(`precio`, `campo PRECIO vacio`).not().isEmpty(),
    check(`descripcion`, `campo DESCRIPCION vacio`).not().isEmpty()
], auth(`admin`), editarProductoPorId )

router.delete(`/:idProducto`, auth(`admin`), eliminarProductoPorId )

module.exports = router
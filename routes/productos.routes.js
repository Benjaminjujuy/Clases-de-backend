const express = require(`express`)
const { obtenerUnProductoPorIdOTodos, crearProducto, editarProductoPorId, eliminarProductoPorId, agregarImagenProductoPorId, buscarProductoPorTermino, agregarProductoAlCarrito, borrarProductoCarrito, mercadoPago,} = require("../controllers/productos.controllers")
const { check } = require("express-validator")
const auth = require("../middlewares/auth")
const multer = require("../middlewares/multer")
const { agregarProductoFav, quitarProductoFav } = require("../services/productos.services")
const router = express.Router()



router.get(`/`, obtenerUnProductoPorIdOTodos) 
router.get(`/buscar`, buscarProductoPorTermino)

     
router.post(`/`,[
    check(`nombre`,`campo NOMBRE vacio`).not().isEmpty(),
    check(`precio`, `campo PRECIO vacio`).not().isEmpty(),
    check(`descripcion`, `campo DESCRIPCION vacio`).not().isEmpty(),
], auth(`admin`), crearProducto ) 

router.post(`/crearPago`, mercadoPago)

router.post(`/agregarProductoCarrito/:idProducto`, auth(`usuario`),agregarProductoAlCarrito)
router.post(`/quitarProductoCarrito/:idProducto`, auth(`usuario`),borrarProductoCarrito)

router.post(`/agregarProductoFav/:idProducto`, auth(`usuario`),agregarProductoFav)
router.post(`/quitarProductoFav/:idProducto`, auth(`usuario`),quitarProductoFav)

router.post(`/agregarImagen/:idProducto`, multer.single(`imagen`),agregarImagenProductoPorId)

router.put(`/:idProducto`,[
    check(`nombre`,`campo NOMBRE vacio`).not().isEmpty(),
    check(`precio`, `campo PRECIO vacio`).not().isEmpty(),
    check(`descripcion`, `campo DESCRIPCION vacio`).not().isEmpty()
], auth(`admin`), editarProductoPorId )

router.delete(`/:idProducto`, auth(`admin`), eliminarProductoPorId)

module.exports = router
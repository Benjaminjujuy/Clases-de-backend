const { Router } = require(`express`)
const { registrarUsuario, obtenerTodosLosUsuarios, obtenerUnUsuario, bajaFisicaUsuario, bajaLogicaUsuario, iniciarSesionUsuario } = require("../controllers/usuarios.controllers")
const router = Router()
const { check } = require(`express-validator`)
const auth = require("../middlewares/auth")

router.post(`/`,[
    check(`nombreUsuario`, `campo USUARIO esta vacio`).not().isEmpty(),
    check(`nombreUsuario`, `min: 5 caracteres y max: 40 caracteres`).isLength({min:5, max:40}),
    check(`contrasenia`, `campo CONTRASENIA esta vacio`).not().isEmpty(),
    check(`contrasenia`, `min: 8 caracteres y max: 50 caracteres`).isLength({min:8, max: 50}),
],registrarUsuario)

router.post(`/login`,[
    check(`nombreUsuario`, `campo USUARIO esta vacio`).not().isEmpty(),
    check(`contrasenia`, `campo CONTRASENIA esta vacio`).not().isEmpty(),
], iniciarSesionUsuario)

router.get(`/`,obtenerTodosLosUsuarios)

router.get(`/:idUsuario`,[
    /*check(`_id`, `Formato ID incorrecto`).isMongoId()*/ 
], obtenerUnUsuario)
router.delete(`/:idUsuario`, bajaFisicaUsuario)

router.put(`/:idUsuario`, bajaLogicaUsuario)

module.exports = router
const { validationResult } = require("express-validator")
const servicioProductos = require(`../services/productos.services`)
const ProductModel = require("../models/producto.schema")


const obtenerUnProductoPorIdOTodos = async(req,res) => {
    try {
      const id = req.query.id
      const limit = req.query.limit || 10
      const to = req.query.to || 0
    
    if(id){
        const producto = await servicioProductos.obtenerUnProducto(id)
        res.status(200).json(producto)
    } else {
        const productos = await servicioProductos.obtenerTodosLosProductos(limit, to)
        res.status(200).json(productos)
    }  
    } catch (error) {
       res.status(500).json(error) 
    }   
    } 

    const crearProducto = async (req, res) =>{
        try {
          const { errors } = validationResult(req)
          if(errors.length) {
          return res.status(400).json({ msg: errors[0].msg })
          }

          const nuevoProducto = await servicioProductos.nuevoProducto(req.body)
          await nuevoProducto.save()
          res.status(201).json(nuevoProducto)

        } catch (error) {
          res.status(500).json(error) 
        }  
      }

      const editarProductoPorId = async(req,res) => {
        try {
          const { errors } = validationResult(req)
          if(errors.length) {
          return res.status(400).json({ msg: errors[0].msg })
          }
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

      const agregarImagenProductoPorId = async(req, res) => {
        try {
          const resultado = await servicioProductos.agregarImagen(req.params.idProducto, req.file)
          if(resultado ===200){
            return res.status(200).json({msg:`Se agrego la imagen correctamente`})
          }
        } catch (error) {
          console.log(error)
        }
      }

      const buscarProductoPorTermino = async (req, res) =>{
        try {
          const resultado = await servicioProductos.buscarProducto(req.query.termino) 
          res.json(resultado)
        } catch (error) {
          console.log(error)
        }
      }

      const agregarProductoAlCarrito = async(req, res) => {
        try {
          const result = await servicioProductos.agregarProducto(req.idUsuario, req.params.idProducto)
          if(result.statusCode === 200){
            res.status(200).json({msg: result.msg})
          }else if(result.statusCode === 400){
            res.status(400).json({msg: result.msg})
          }
        } catch (error) {
          console.log(error)
        }
      }

      const borrarProductoCarrito = async(req,res) => {
        try {
          const result = await servicioProductos.quitarProducto(req.idUsuario, req.params.idProducto)
          if(result.statusCode === 200){
            res.status(200).json({msg: result.msg})
          }
        } catch (error) {
          console.log(error)
        }
      }

      const agregarProductoAlFavoritos = async(req, res) => {
        try {
          const result = await servicioProductos.agregarProductoFav(req.idUsuario, req.params.idProducto)
          if(result.statusCode === 200){
            res.status(200).json({msg: result.msg})
          }else if(result.statusCode === 400){
            res.status(400).json({msg: result.msg})
          }
        } catch (error) {
          console.log(error)
        }
      }

      const borrarProductoFavoritos = async(req,res) => {
        try {
          const result = await servicioProductos.quitarProductoFav(req.idUsuario, req.params.idProducto)
          if(result.statusCode === 200){
            res.status(200).json({msg: result.msg})
          }else if(result.statusCode === 400){
            res.status(400).json({msg: result.msg})
          }
        } catch (error) {
          console.log(error)
        }
      }

    module.exports = {
        obtenerUnProductoPorIdOTodos,
        crearProducto,
        editarProductoPorId,
        eliminarProductoPorId,
        agregarImagenProductoPorId,
        buscarProductoPorTermino,
        agregarProductoAlCarrito,
        borrarProductoCarrito,
        agregarProductoAlFavoritos,
        borrarProductoFavoritos
    }
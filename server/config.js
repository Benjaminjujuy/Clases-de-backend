const express = require(`express`)
const path = require(`path`)
const cors = require(`cors`)

class Server{
    constructor(){
       this.app = express()
       this.port = process.env.PORT || 8080

       this.middleware()
       this.routes()
    }

    middleware(){
      this.app.use(express.json())
      this.app.use(express.static(path.join(__dirname, `public`)))
      this.app.use(cors())
    }
    routes(){
        this.app.use(`/api/productos`, require(`../routes/productos.routes`))
        this.app.use(`/api/usuarios`, require(`../routes/usuarios.routes`))
    }

    listen(){
      this.app.listen(this.port, () =>{
        console.log(`server ok`, this.port)
    })
    }
}


module.exports = Server
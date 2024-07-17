const jwt = require(`jsonwebtoken`)

module.exports = () => (req, res, next) =>{
    try {
        const token = req.header(`auth`)
        const verify = jwt.verify(token, process.env.JWT_SECRET)
        next()
    } catch (error) {
        console.log(error)
    }
}
const transporter = require(`../helpers/nodemailer`)

const registroUsuario = async(nombre, apellido, emailUsuario) => {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: "Hello ✔", // Subject line
      html: `
      
    <div>
        <h2>Bienvenido</h2>
    </div>
      
      `, // html body
    });
  }

  module.exports = {
    registroUsuario
  }
import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import path from 'path';

// Crear la instancia de Express
const app = express();
const port = 4001;

// Middleware para parsear el cuerpo de la solicitud (formulario)
app.use(bodyParser.urlencoded({ extended: true }));

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, '../public')));  // Servir archivos HTML, CSS, JS

// Ruta para la raíz (enviar a index.html o contacto.html)
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));  // Redirige a index.html
});

// Configuración de transporte para Nodemailer (ejemplo con Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dnancay@mood.pe',  // Tu correo electrónico
    pass: 'slwr ankv lzgy vluj',       // Tu contraseña o contraseña de aplicación si usas 2FA
  },
});

// Ruta para manejar el envío del formulario de contacto
app.post('/enviar-correo', (req: Request, res: Response) => {
  const { nombre, correo, telefono, empresa, mensaje } = req.body;

  // Configuración del correo
  const mailOptions = {
    from: 'dnancay@mood.pe',    // Correo desde el que se enviará
    to: 'dnancay@mood.pe', // Correo destinatario
    subject: '[MOOD] Formulario de contacto',
    text: `Nombre: ${nombre}\nCorreo: ${correo}\nTeléfono: ${telefono}\nEmpresa: ${empresa}\nMensaje: ${mensaje}`,
  };

  // Enviar correo usando Nodemailer
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Hubo un error al enviar el correo.');
    }
    // Redirigir a la página de gracias
    res.redirect('/gracias.html'); 
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

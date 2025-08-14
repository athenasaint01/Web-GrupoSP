"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 4000;
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public', 'index.html'));
});
const transporter = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: 'dnancay@mood.pe',
        pass: 'slwr ankv lzgy vluj',
    },
});
app.post('/enviar-correo', (req, res) => {
    const { nombre, correo, telefono, empresa, mensaje } = req.body;
    const mailOptions = {
        from: 'dnancay@mood.pe',
        to: 'dnancay@mood.pe',
        subject: '[MOOD] Formulario de contacto',
        text: `Nombre: ${nombre}\nCorreo: ${correo}\nTeléfono: ${telefono}\nEmpresa: ${empresa}\nMensaje: ${mensaje}`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Hubo un error al enviar el correo.');
        }
        res.redirect('/gracias.html');
    });
});
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map
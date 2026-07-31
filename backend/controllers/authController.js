const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const { nombre, email, password } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const nuevoUsuario = new User({ nombre, email, password: hashedPassword });
        await nuevoUsuario.save();
        res.status(201).json({ mensaje: "Usuario registrado con éxito" });
    } catch (error) {
        res.status(400).json({ mensaje: "Error al registrar usuario", error });
    }
    };

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const usuario = await User.findOne({ email });
        if (!usuario) return res.status(400).json({ mensaje: "Credenciales incorrectas" });
        const esValida = await bcrypt.compare(password, usuario.password);
        if (!esValida) return res.status(400).json({ mensaje: "Credenciales incorrectas" });
        const token = jwt.sign({ id: usuario._id }, 'S3CR3T0', { expiresIn: '1h' });
        res.status(200).json({ token, usuario: { nombre: usuario.nombre, email: usuario.email } });
    } catch (error) {
        res.status(500).json({ mensaje: "Error en el servidor", error });
    }
};
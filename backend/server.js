const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ticketRoutes = require('./routes/ticketRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Conexión local a MongoDB Compass
mongoose.connect('mongodb://127.0.0.1:27017/helpdesk_db')
    .then(() => console.log('¡Conexión exitosa a MongoDB! 🚀'))
    .catch(err => console.error('Error de conexión a la Base de Datos:', err));

    // Rutas de comunicación de la API REST
app.use('/tickets', ticketRoutes);
app.use('/auth', authRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor Backend ejecutándose en http://localhost:${PORT}`));
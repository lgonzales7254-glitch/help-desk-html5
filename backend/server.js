require('dotenv').config(); // 1. Nueva línea para leer las variables de la nube
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ticketRoutes = require('./routes/ticketRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// 2. Conexión dinámica: Usa la nube si existe, si no, usa tu base local
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/helpdesk_db';

mongoose.connect(MONGO_URI)
  .then(() => console.log('Conexión exitosa a la Base de Datos! 🚀'))
  .catch(err => console.error('Error de conexión a la Base de Datos:', err));

// Rutas de comunicación de la API REST (Tus rutas originales)
app.use('/tickets', ticketRoutes);
app.use('/auth', authRoutes);

// 3. Puerto dinámico requerido para que Render pueda asignar su propio puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
const express = require('express');
const app = express();
const db = require('./db');
const userRoutes = require('./routes/userRoutes');

// Middleware para analizar el cuerpo de las solicitudes como JSON
app.use(express.json());

// Registrar las rutas
app.use('/api', userRoutes);

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});

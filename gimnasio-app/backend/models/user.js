const mongoose = require('mongoose');

// Definir el esquema de usuario
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// Crear el modelo de usuario
const User = mongoose.model('User', userSchema);

// Exportar el modelo
module.exports = User;

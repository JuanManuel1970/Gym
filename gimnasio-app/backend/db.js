const mongoose = require('mongoose');

// Conexión a la base de datos
mongoose.connect('mongodb://localhost/nombre-de-tu-base-de-datos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

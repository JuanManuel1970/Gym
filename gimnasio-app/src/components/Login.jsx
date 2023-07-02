import React, { useState } from 'react';

const Login = () => {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Agrega aquí la lógica de validación de contraseña
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;

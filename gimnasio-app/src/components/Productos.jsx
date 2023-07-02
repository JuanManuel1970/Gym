import React, { useState } from 'react';

const Productos = () => {
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Creatina', precio: 10, imagen: '../assets/p1.jpg' },
    { id: 2, nombre: 'Producto 2', precio: 15, imagen: '../assets/p2.jpg' },
    { id: 3, nombre: 'Producto 3', precio: 20, imagen: 'imagen3.jpg' },
    { id: 1, nombre: 'Producto 4', precio: 10, imagen: 'imagen1.jpg' },
    { id: 2, nombre: 'Producto 5', precio: 15, imagen: 'imagen2.jpg' },
    { id: 3, nombre: 'Producto 6', precio: 20, imagen: 'imagen3.jpg' },
  ]);
  const [carrito, setCarrito] = useState([]);
  const [cantidad, setCantidad] = useState(1);

  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.find((p) => p.id === producto.id);
    if (productoExistente) {
      const nuevosProductos = carrito.map((p) =>
        p.id === producto.id ? { ...p, cantidad: p.cantidad + cantidad } : p
      );
      setCarrito(nuevosProductos);
    } else {
      const nuevoProducto = { ...producto, cantidad: cantidad };
      setCarrito([...carrito, nuevoProducto]);
    }
    setCantidad(1);
  };

  const editarCantidad = (id, cantidad) => {
    const nuevosProductos = carrito.map((p) =>
      p.id === id ? { ...p, cantidad: cantidad } : p
    );
    setCarrito(nuevosProductos);
  };

  const eliminarDelCarrito = (id) => {
    const nuevosProductos = carrito.filter((p) => p.id !== id);
    setCarrito(nuevosProductos);
  };

  const comprar = () => {
    // Lógica para realizar la compra (puede ser un llamado a una API, guardar en la base de datos, etc.)
    alert('¡Compra realizada con éxito!');
    setCarrito([]); // Reiniciar el carrito después de realizar la compra
  };

  return (
    <div>
      <h1>Productos</h1>

      <div className="row">
        {productos.map((producto) => (
          <div key={producto.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={producto.imagen}
                className="card-img-top"
                alt={producto.nombre}
              />
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">Precio: ${producto.precio}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => agregarAlCarrito(producto)}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2>Carrito de compras</h2>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div>
          <ul className="list-group">
            {carrito.map((producto) => (
              <li
                key={producto.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {producto.nombre} - Cantidad:
                <input
                  type="number"
                  min="1"
                  value={producto.cantidad}
                  onChange={(e) =>
                    editarCantidad(producto.id, parseInt(e.target.value))
                  }
                />
                <button
                  className="btn btn-danger"
                  onClick={() => eliminarDelCarrito(producto.id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>

          <button className="btn btn-success mt-3" onClick={comprar}>
            Comprar
          </button>
        </div>
      )}
    </div>
  );
};

export default Productos;
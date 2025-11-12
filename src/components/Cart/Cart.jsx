import React, { useState } from "react";
import "./Cart.css";

export default function Cart() {
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Pan", precio: 1500 },
    { id: 2, nombre: "Queso", precio: 1200 },
    { id: 3, nombre: "Carne", precio: 18000 },
  ]);

  const [carrito, setCarrito] = useState([]);

  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: "",
    precio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoProducto({
      ...nuevoProducto,
      [name]: value,
    });
  };

  const agregarProducto = (e) => {
    e.preventDefault();
    if (!nuevoProducto.nombre || !nuevoProducto.precio) return alert("Completa todos los campos");

    const productoNuevo = {
      id: productos.length + 1,
      nombre: nuevoProducto.nombre,
      precio: parseFloat(nuevoProducto.precio),
    };

    setProductos([...productos, productoNuevo]);
    setNuevoProducto({ nombre: "", precio: "" });
  };

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((item, index) => index !== id));
  };

  const total = carrito.reduce((acc, item) => acc + item.precio, 0);

  return (
    <div className="carrito-container">
      <h1> Carrito de Compras</h1>

        {/* Formulario para agregar  */}
      <form onSubmit={agregarProducto} className="form-producto">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre del producto"
          value={nuevoProducto.nombre}
          onChange={handleChange}
        />
        <input
          type="number"
          name="precio"
          placeholder="Precio"
          value={nuevoProducto.precio}
          onChange={handleChange}
        />
        <button type="submit">Agregar al catálogo</button>
      </form>

      <h2>Productos</h2>
      <ul className="lista-productos">
        {productos.map((p) => (
          <li key={p.id}>
            {p.nombre} - ${p.precio}
            <button onClick={() => agregarAlCarrito(p)}>Agregar al carrito</button>
          </li>
        ))}
      </ul>

      
      <h2>Carrito</h2>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <ul className="lista-carrito">
          {carrito.map((item, index) => (
            <li key={index}>
              {item.nombre} - ${item.precio}
              <button onClick={() => eliminarDelCarrito(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}

      <h3>Total: ${total}</h3>
    </div>
  );
}

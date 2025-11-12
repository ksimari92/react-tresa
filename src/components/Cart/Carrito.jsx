import { useState } from "react"

const Carrito = () => {
    const [productos, setProductos] = useState([
        { id: 1, producto: "Producto 1", precio: 100 },
        { id: 2, producto: "Producto 2", precio: 200 },
        { id: 3, producto: "Producto 3", precio: 300 }
    ])

    const [nuevoProducto, setNuevoProducto] = useState({
        id: null,
        producto: "",
        precio: ""
    })

    const [carrito, setCarrito] = useState([]);

    const handleInputChange = (e) => {
        setNuevoProducto({
            ...nuevoProducto,
            [e.target.name]: e.target.value
        })

        console.log(e.target.name, e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //prevenir el comportamiento por defecto del form

        nuevoProducto.id = productos.length + 1;
      
        setProductos([...productos, nuevoProducto]);
        setNuevoProducto({
            ...nuevoProducto,
            producto: "",
            precio: ""
        })

        console.log("Producto agregado:", nuevoProducto)
    }

    return (
        <div>
            <h2> Agregar un producto</h2>
            <form style={{ display: "flex", flexDirection: "column", width: "50%" }} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Nombre del producto'
                    name='producto'
                    value={nuevoProducto.nombre}
                    onChange={handleInputChange}
                />

                <input
                    type="number"
                    name='precio'
                    placeholder='Precio del producto'
                    value={nuevoProducto.precio}
                    onChange={handleInputChange}
                />

                <button type='submit'>Enviar</button>

            </form>

            <ul>
                {productos.map(prod => <li key={prod.id}>Producto: {prod.producto} - Precio: {prod.precio}</li>)}


            </ul>
        </div>
    )
}

export default Carrito
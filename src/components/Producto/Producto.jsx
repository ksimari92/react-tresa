import React from 'react'

const Producto = ({producto}) => { 

    const {descripcion, textoBoton} = producto;

    return (
        <div>
            <p>{descripcion}</p>
            <button>{textoBoton}</button>
        </div>
    )
}

export default Producto


// let props = {
//     titulo: "prodcuto",
//     descripcion: "lorem 1234",
//     textoBoton: "Comprar"
// }

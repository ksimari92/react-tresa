import React, { use, useState } from 'react'

const FormEjemplo = () => {
    const [datos, setDatos] = useState({
        nombre: '',
        email: '',
        texto: ''
    })

    const handleInputChange = (event) => {

        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })

        console.log([event.target.name], event.target.value)
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        
        alert("Formulario enviado correctamente");
        console.log("Formaulario enviado:", datos);
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/*Nombre */}
                <input
                    placeholder='nombre'
                    type="text"
                    name='nombre'
                    value={datos.nombre}
                    onChange={handleInputChange}
                />

                {/*Email */}
                <input
                    placeholder='email'

                    type="email"
                    name='email'
                    value={datos.email}
                    onChange={handleInputChange}
                />

                {/*Texto */}
                <textarea
                    placeholder='mensaje'

                    name="texto"
                    value={datos.texto}
                    onChange={handleInputChange}

                />

                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default FormEjemplo
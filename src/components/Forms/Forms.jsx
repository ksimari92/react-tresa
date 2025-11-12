import React, { useState } from "react";
import "./index.css";

export default function Forms() {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        mensaje: "",
    });

    //   const [enviado, setEnviado] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        if (!formData.nombre || !formData.email || !formData.mensaje) {
            alert("Todos los campos son obligatorios");
            return;
        }

        console.log(formData);
        // alert("Formulario enviado con éxito");
        setEnviado(true);

        setFormData({
            nombre: "",
            email: "",
            mensaje: "",
        });
    };

    return (
        <div className="form-container">
            <h2>Formulario</h2>

            {/* {enviado && <p className="form-success">¡Formulario enviado con éxito!</p>} */}

            <form onSubmit={handleSubmit} className="form">
                <label className="form-label">
                    Nombre:
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="form-input"
                    />
                </label>

                <label className="form-label">
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                    />
                </label>

                <label className="form-label">
                    Mensaje:
                    <textarea
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        className="form-textarea"
                    />
                </label>

                <button type="submit" className="form-button">
                    Enviar
                </button>
            </form>

            <div>
                <p>Los datos ingresados fueron:</p>
                <p>{formData.nombre} </p>
                <p>{formData.email}</p>
                <p>{formData.mensaje}</p>


            </div>
        </div>
    );
}

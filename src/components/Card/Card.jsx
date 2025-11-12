import Boton from "./Boton";
import Imagen from "./Imagen";
import './index.css'



const Card = ({children}) => {
    //logica

    return (
        <div className="contenedor-card">
            <h1>PARA TODOS IGUAL</h1>
            {children}
        </div>
    )
}

export default Card;
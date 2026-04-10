import anona from '../imagenes/anona.jpg';
import carambola  from '../imagenes/carambola.jpg';
import manzano from '../imagenes/manzano.jpg';
import '../estilos/Tarjeta.css';

const imagenes= {
    anona, carambola, manzano
}

function Tarjeta(props){
    return(
        <div className="contenedor-tarjeta">
            <img 
                className="imagen-tarjeta"
                src={imagenes[props.imagen]} 
                alt='Imagen de fruta ${props.nombre}' />
            <div className="contenedor-texto-tarjeta">
                <p className="titulo-tarjeta">
                    <strong>{props.nombre}</strong>
                </p>
                <p className="subtitulo-tarjeta">
                    {props.region}
                </p>
                <p className="texto-tarjeta">
                    {props.texto}
                </p>
            </div>
        </div>
    );
}

export default Tarjeta;
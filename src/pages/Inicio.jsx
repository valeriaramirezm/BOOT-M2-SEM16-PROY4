import FormularioReserva from '../components/Reserva/FormularioReserva';
import Slider from '../components/Slider/Slider';
import { Ofertas } from './Ofertas';
import carta from "../assets/carta.png"; 
import reservaLinea from "../assets/reserva-linea.png"; 

export const Inicio = () => {

    return (
        <div>
            <Slider />
            <div className="image-container">
                <img className="centered-image" src={carta} alt="Descripción de la imagen" />
            </div>
            <Ofertas />
            <div className="image-container">
                <img className="centered-image" src={reservaLinea} alt="imagen 2 desde inicio"/>
            </div>
            <FormularioReserva />
        </div>
    )
}
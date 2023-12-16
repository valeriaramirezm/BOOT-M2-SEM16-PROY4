import FormularioReserva from '../components/Reserva/FormularioReserva';
import Slider from '../components/Slider/Slider';
import { Ofertas } from './Ofertas';

export const Inicio = () => {

    return (
        <div>
            <Slider />
            <div className="image-container">
                <img className="centered-image" src="src/assets/carta.png" alt="Descripción de la imagen" />
            </div>
            <Ofertas />
            <div className="image-container">
                <img className="centered-image" src="./src/assets/reserva-linea.png" alt="imagen 2 desde inicio"/>
            </div>
            <FormularioReserva />
        </div>
    )
}
// Importa tu archivo CSS
import React, { useState } from 'react';
import './FormularioReserva.css';
import { firestoreDB } from '../../firebase/config';

const FormularioReserva = () => {

    const inicioReserva = {
        nombreCompleto: '',
        correo: '',
        telefono: '',
        reserva: '',
        hora:'',
        numeroComensales: '',
    };


    const [reservas, setReservas] = useState(inicioReserva);



    const handleChange = (e) => {
        setReservas({
            ...reservas,
            [e.target.name]: e.target.value,
        });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await firestoreDB.collection("reservas").add(reservas)
            setReservas(inicioReserva)
            alert('Su reserva se ha realizado con éxito')
        } catch (error) {
            console.log(error)
        }
    };




    return (
        <div className="container-form">
            <div className="image-form">
                <img src="src/assets/restaurante.png" alt="Form Image" width="100%" />
            </div>


            <div className="form-container">
                <h2>Reserva en pocos pasos</h2>
                <p className='texto'>"Descubre la exquisitez del auténtico sabor japonés en SushiZen. ¡Te esperamos para una experiencia única de sushi y más!"</p>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="nombre">Nombre Completo:</label>
                        <input type="text" id="nombreCompleto" name="nombreCompleto" value={reservas.nombreCompleto} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="correo">Correo Electrónico:</label>
                        <input type="email" id="correo" name="correo" value={reservas.correo} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="telefono">Teléfono:</label>
                        <input type="number" id="telefono" name="telefono" value={reservas.telefono} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="reserva">Fecha Reserva:</label>
                        <input type="date" id="reserva" name="reserva" value={reservas.reserva} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="reserva">Hora Reserva:</label>
                        <input type="time" id="hora" name="hora" value={reservas.hora} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="numerocomensales">Número Comensales:</label>
                        <input type="number" id="numeroComensales" name="numeroComensales" value={reservas.numeroComensales} onChange={handleChange} />
                    </div>

                    <button type="submit">Enviar</button>

                </form>
            </div>
        </div>
    );
}

export default FormularioReserva;

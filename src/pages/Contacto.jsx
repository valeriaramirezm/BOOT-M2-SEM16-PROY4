import React from 'react';
import './global.css';

export const Contacto = () => {

    const datosDeContactocasaMatriz = {
        direccion: "Islas Hébridas 542, Santiago, Región Metropolitana",
        telefono: "222-1234-5678",
        correo: "santiago@sushizen.com",
        horario: "Martes a sábado de 12:30 a 22:30 hrs, Domingo de 12:30 a 18:00 hrs / Lunes festivos abierto"
    };


    return (
        <div className='container'>

            <div className='container-contacto'>
                <h2 className='titulo-contacto'>Sushizen Santiago:</h2>
                <p className='p-contacto'>{datosDeContactocasaMatriz.direccion}</p>
                <p className='p-contacto'>{datosDeContactocasaMatriz.telefono}</p>
                <p className='p-contacto'>{datosDeContactocasaMatriz.correo}</p>
                <p className='p-contacto'>{datosDeContactocasaMatriz.horario}</p>
                <br />
                <iframe id="map-canvas" width="100%"  height="600"  frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=islas henridas 5427 lo prado&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">Powered by <a href="https://www.googlemapsgenerator.com">embed google maps html</a> and <a href="https://allabeviljas.se/">sms lån som beviljar alla</a></iframe>
            </div>



        </div>
    );
}

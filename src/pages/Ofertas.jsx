import React from 'react';
import './global.css';
import Card from '../components/Card/Card';
import menu1 from './../assets/menu-1.png'
import menu2 from './../assets/menu-2.png'
import menu3 from './../assets/menu-3.png'
import menu4 from './../assets/menu-4.png'

  
export const Ofertas = () => {
    return (
        <div className='center'>


            <div className='container'>
                <Card img={menu1} title="Delicia del Océano" description="Sumérgete en la frescura del mar con nuestra exquisita selección de sushi. Experimenta sabores inigualables que te transportarán directamente a la costa japonesa."/>
                <Card img={menu2} title="Fusión de Sabores" description="Descubre nuestra fusión única de ingredientes frescos y creatividad culinaria. Cada bocado es una explosión de sabores que te dejará ansioso por más." />
                <Card img={menu3} title="Tradición Reimaginada" description="Revivimos la auténtica tradición del sushi con un toque moderno. Nuestros platillos ofrecen una experiencia única que rinde homenaje a la rica herencia de la cocina japonesa." />
                <Card img={menu4} title="Aventura Sushi" description="Embárcate en una aventura culinaria con nuestro menú sushi. Desde clásicos hasta creaciones innovadoras, cada rollo cuenta una historia de sabores que te sorprenderá." />

            </div>


        </div>



    );
};

import React from 'react';
import './global.css';
import Card from '../components/Card/Card';


  
export const Ofertas = () => {
    return (
        <div className='center'>


            <div className='container'>
                <Card img='src/assets/menu-1.png' title="Delicia del Océano" description="Sumérgete en la frescura del mar con nuestra exquisita selección de sushi. Experimenta sabores inigualables que te transportarán directamente a la costa japonesa."/>
                <Card img='src/assets/menu-2.png' title="Fusión de Sabores" description="Descubre nuestra fusión única de ingredientes frescos y creatividad culinaria. Cada bocado es una explosión de sabores que te dejará ansioso por más." />
                <Card img='src/assets/menu-3.png' title="Tradición Reimaginada" description="Revivimos la auténtica tradición del sushi con un toque moderno. Nuestros platillos ofrecen una experiencia única que rinde homenaje a la rica herencia de la cocina japonesa." />
                <Card img='src/assets/menu-4.png' title="Aventura Sushi" description="Embárcate en una aventura culinaria con nuestro menú sushi. Desde clásicos hasta creaciones innovadoras, cada rollo cuenta una historia de sabores que te sorprenderá." />

            </div>


        </div>



    );
};

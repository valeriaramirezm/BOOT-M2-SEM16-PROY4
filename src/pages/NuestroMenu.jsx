import React from 'react';
import './global.css';

export const NuestroMenu = () => {
   
    const menu = [
        {
            categoria: "Entradas",
            platos: [
                { name: 'Edamame: Vainas de soja hervidas con sal marina', price: '$12.990' },
                { name: 'Sopa Miso: Caldo de miso con tofu, algas y cebollín.', price: '$11.000' },
                { name: 'Tempura de Verduras: Vegetales tempurizados con salsa dip.', price: '$10.800' },
            ]
        },
        {
            categoria: "Nigiri Sushi",
            platos: [
                { name: 'Sake (Salmón): Salmón sobre una base de arroz.', price: '$15.400' },
                { name: 'Maguro (Atún): Atún fresco sobre arroz.', price: '$19.700' },
                { name: 'Ebi (Langostino): Langostino cocido sobre arroz.', price: '$21.990' },
                { name: 'Tamago (Huevo): Tortilla japonesa dulce sobre arroz.', price: '$12.990' },
            ]
        },
        {
            categoria: "Sashimi",
            platos: [
                { name: 'Sake (Salmón): Finas lonchas de salmón fresco.', price: '$14.990' },
                { name: 'Maguro (Atún): Atún fresco cortado en láminas.', price: '$13.990' },
                { name: 'Hamachi (Seriola): Seriola en sashimi.', price: '$11.990' },
            ]
        },
        {
            categoria: "Makis",
            platos: [
                { name: 'California Roll: Salmón, aguacate, pepino y cangrejo.', price: '$16.990' },
                { name: 'Spicy Tuna Roll: Atún picante con aguacate y cebollín.', price: '$16.990' },
                { name: 'Dragon Roll: Langostino tempura, aguacate, cubierto con anguila y aguacate.', price: '$18.990' },
                { name: 'Vegetarian Roll: Aguacate, pepino, zanahoria y rábano.', price: '$14.990' },
            ]
        },
        {
            categoria: "Platos Especiales",
            platos: [
                { name: 'Chirashi Bowl: Variedad de pescado crudo sobre arroz.', price: '$20.990' },
                { name: 'Bento Box: Combinación de sushi, sashimi, tempura y arroz.', price: '$22.990' },
            ]
        },
        {
            categoria: "Postres",
            platos: [
                { name: 'Mochi: Bolitas de helado envueltas en arroz glutinoso.', price: '$8.990' },
                { name: 'Dorayaki: Panqueques rellenos de crema dulce de frijol rojo.', price: '$10.990' },
            ]
        },
        {
            categoria: "Bebidas",
            platos: [
                { name: 'Té Verde: Té japonés tradicional.', price: '$3.990' },
                { name: 'Sake: Variedades de sake caliente y frío.', price: '$5.990' },
                { name: 'Cerveza Japonesa: Marcas populares como Asahi o Sapporo.', price: '$4.990' },
            ]
        },
    ];
    

    return (

        <div className='container-menu'>
            <h1 className='titulo-menu'>Sushi Menu</h1>
  
            {menu.map((categoria, index) => (
                <div key={index}><br /><br />
                    <h2 className='categoria-menu'>{categoria.categoria}</h2>
                    <ul>
                        {categoria.platos.map((plato, subIndex) => (
                            <li key={subIndex}>
                                <p className='texto-menu'>{plato.name} - {plato.price}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

        </div>



    );
};
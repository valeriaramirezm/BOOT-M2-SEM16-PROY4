import React from 'react';
import './global.css';

export const Blog = () => {
    return (

<div className='blog-container'>
    <div className='blog-flex'>
        <div>
            <img src="src/assets/blog.jpg" alt="Card Image" className='blog-card-img' />
        </div>
        <div>
    <h2 className="blog-card-title">Explorando el Paraíso del Sabor en SushiZen: Un Viaje Culinario Inolvidable</h2>
    <p className="blog-card-description">{`En el bullicioso corazón gastronómico de la ciudad, emerge un rincón que lleva la experiencia culinaria a nuevas alturas: SushiZen. Este encantador restaurante de sushi ha conquistado los corazones y los paladares de los amantes de la comida japonesa, fusionando la tradición con la innovación para crear una experiencia gastronómica inolvidable.`}<br /><br />
        {`Desde el momento en que pones un pie en SushiZen, te envuelve una atmósfera de tranquilidad y sofisticación. La cuidadosa decoración fusiona elementos modernos con toques tradicionales japoneses, creando un ambiente zen que invita a relajarse y disfrutar de la experiencia culinaria que está por venir.`}<br /><br />
        {`El sushi en SushiZen es más que una comida; es un arte. Los chefs maestros, hábiles y apasionados, utilizan ingredientes frescos y de la más alta calidad para elaborar piezas que son verdaderas obras maestras. Desde el clásico Nigiri hasta las creativas creaciones de autor, cada bocado es una explosión de sabores cuidadosamente equilibrados que transporta a los comensales a las calles de Tokio.`}<br /><br />
        {`La diversidad de opciones en el menú de SushiZen garantiza que haya algo para satisfacer todos los gustos y preferencias. Desde los amantes de los sabores intensos del wasabi hasta aquellos que prefieren opciones más suaves y sabores más delicados, SushiZen ofrece una experiencia gastronómica inclusiva.`}<br /><br />
        {`SushiZen se enorgullece de su compromiso con la frescura y la calidad. Los ingredientes se seleccionan con esmero, y la dedicación a la excelencia se refleja en cada detalle, desde la presentación de los platos hasta el servicio atento y amable.`}</p>
</div>

    </div>
</div>



    );
};

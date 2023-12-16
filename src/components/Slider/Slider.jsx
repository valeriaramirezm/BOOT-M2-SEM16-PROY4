// Banner.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from "../../assets/banner1.png"; // Ajusta la ruta según sea necesario
import image2 from "../../assets/banner2.png"; // Ajusta la ruta según sea necesario
import image3 from "../../assets/banner3.png"; // Ajusta la ruta según sea necesario

const Banner = () => {
    const images = [image1, image2, image3];

    const arrowStyles = {
        fontSize: '24px', // Tamaño de la flecha
        color: 'red',     // Cambia el color de la flecha según tus preferencias
        background: '#ED1C24', // Cambia el fondo de la flecha si es necesario
        border: '12px solid #ED1C24',
    };

    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...arrowStyles, right: '0' }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...arrowStyles, left: '0' }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt={`Banner ${index + 1}`} style={{ width: '80%', display: 'block', margin: 'auto',}}
                    />
                </div>
            ))}
        </Slider>
    );
};

export default Banner;

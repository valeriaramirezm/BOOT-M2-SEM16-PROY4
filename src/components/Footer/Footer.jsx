import React from 'react';
import './Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="logo-container">

                    <img src="src/assets/logo.png" alt="Logo" />
                </div>
                <ul>
                    <li><a href='' className="links-container">Términos y Condiciones de Uso</a></li>
                    <li><a href='' className="links-container">Política de Privacidad</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;

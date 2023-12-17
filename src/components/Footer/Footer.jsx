import React from 'react';
import './Footer.css'; 
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="logo-container">

                    <img src={logo} alt="Logo" />
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

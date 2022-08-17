import React from 'react';
import LogoMuni from '../../../assets/Logo-Municipalidad-Transparente-2020S-min.png'
import './styles.css';

const Footer = () => {
    return (
        <footer id="footer">
            <div id="muni">
                <img
                    id="muniImg"
                    alt="Logo Municipalidad de Córdoba"
                    src={LogoMuni}               
                />
            </div>
            <div id="horizontalLine">
                <div id="color1"></div>
                <div id="color2"></div>
                <div id="color3"></div>
                <div id="color4"></div>
                <div id="color5"></div>
                <div id="color6"></div>
                <div id="color7"></div>
            </div>
        </footer>
    );
};

export default Footer;
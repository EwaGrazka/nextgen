import React from 'react';
import './Footer.scss';

export const Footer = ({ isNight }) => {
    return (

        <div className={isNight ? 'footer-container-n' : 'footer-container'} >
            © Nextgen 2022. Wszelkie prawa zastrzeżone.Wykonane przez < a href='https://www.linkedin.com/in/ewa-gr%C4%85zka-789461161/' > egrazka</a >.
        </div >


    );
};

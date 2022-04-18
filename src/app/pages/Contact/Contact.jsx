import React from 'react';
import bcgSubpage from '../../../assets/bcg-white.jpg';
import './Contact.scss'
import map from '../../../assets/lagow.png'

export const Contact = () => {
    return (
        <div className='contact-container'>
            <div className='subpage-header'>
                <img className='contact-header-img' src={bcgSubpage} />
                <h1>Kontakt</h1>
            </div>
            <div className='contact-content'>
                <p className='adress-wrapper'>
                    <span>ul. Zaułek 1,</span>
                    <span>66-615 Łagów</span>
                    <span>+48 601 442 442</span>
                    <span>Koncesja MSWiA B-102/2018</span>
                </p>
                <img src={map} alt='map adresss' />
            </div>
        </div>
    );
};

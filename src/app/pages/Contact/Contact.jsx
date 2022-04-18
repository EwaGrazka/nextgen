import React from 'react';
import bcgSubpage from '../../../assets/bcg-white.jpg';
import bcgSubpageG from '../../../assets/bcg-green.jpg';

import './Contact.scss'
import map from '../../../assets/lagow.png'
import mapG from '../../../assets/lagow-green.png'
import { useTranslation } from 'react-i18next';


export const Contact = ({ isNight }) => {
    const { t, i18n } = useTranslation('common');

    return (
        <div className={isNight ? 'contact-container-n' : 'contact-container'}>
            <div className='subpage-header'>
                <img className='contact-header-img' src={isNight ? bcgSubpageG : bcgSubpage} />
                <h1>{t('commons.links.contact')}</h1>
            </div>
            <div className='contact-content'>
                <p className='adress-wrapper'>
                    <span>ul. Zaułek 1,</span>
                    <span>66-615 Łagów</span>
                    <span>+48 601 442 442</span>
                    <span>Koncesja MSWiA B-102/2018</span>
                </p>
                <img src={isNight ? mapG : map} alt='map adresss' />
            </div>
        </div>
    );
};

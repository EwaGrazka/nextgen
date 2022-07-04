import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './CTA.scss';

export const CTA = ({ text, isNight }) => {
    const { t, i18n } = useTranslation('common');

    return (

        <div className={isNight ? 'cta-container green' : 'cta-container blue'}>
            <p className='cta-text'>{text}</p>
            <div className='cta-buttons-wrapper'>
                <button className={isNight ? 'green-border' : 'blue-border'} > <Link className={isNight ? 'green' : 'blue'} to={{
                    pathname: "/contact"
                }}> {t('home.cta-button-1')}</Link></button>

                <button className={isNight ? 'green-border' : 'blue-border'}><Link className={isNight ? 'green' : 'blue'} to={{
                    pathname: "/products"
                }}>{t('home.cta-button-2')}</Link></button>
            </div>
        </div >


    );
};

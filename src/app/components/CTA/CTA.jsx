import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './CTA.scss';

export const CTA = ({ text, isNight }) => {
    const { t, i18n } = useTranslation('common');

    return (

        <div className={isNight ? 'section-container cta-container-n' : 'section-container cta-container'}>
            {text}
            <div className='cta-buttons-wrapper'>
                <button><Link to={{
                    pathname: "/contact"
                }}> {t('home.cta-button-1')}</Link></button>

                <button><Link to={{
                    pathname: "/products"
                }}>{t('home.cta-button-2')}</Link></button>
            </div>
        </div>


    );
};

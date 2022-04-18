import React from 'react';
import { useTranslation } from 'react-i18next';
import './CTA.scss';

export const CTA = ({ text, isNight }) => {
    const { t, i18n } = useTranslation('common');

    return (

        <div className={isNight ? 'section-container cta-container-n' : 'section-container cta-container'}>
            {text}
            <div className='cta-buttons-wrapper'>
                <button>{t('home.cta-button-1')}</button>
                <button>{t('home.cta-button-2')}</button>
            </div>
        </div>


    );
};

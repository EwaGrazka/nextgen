import React from 'react';
import './Quote.scss'
import quotation from '../../../assets/quote.png'
import quotationGreen from '../../../assets/quote-green.png'
import { useTranslation } from 'react-i18next';

export const Quote = ({ isNight }) => {
    const { t, i18n } = useTranslation('common');

    return (
        <div className='quote-container'>
            <img src={isNight ? quotationGreen : quotation} alt='quotation marks' />
            <p>{t('home.quote.a')} <span className={isNight ? 'green' : 'blue'}>{t('home.quote.b')}</span> {t('home.quote.c')} <span className={isNight ? 'green' : 'blue'}>{t('home.quote.d')}</span>{t('home.quote.e')}</p>

        </div>
    );
};

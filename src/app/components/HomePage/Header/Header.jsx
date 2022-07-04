import React from 'react';
import soldiersWhite from '../../../../assets/soldiers-white.jpg';
import soldiersBlack from '../../../../assets/soldiers-black.jpg';

import './Header.scss'
import { useTranslation } from 'react-i18next';

export const Header = ({ isNight }) => {
    const { t } = useTranslation('common');

    return (
        <div className='header-wrapper'>
            <h1 className='header-title'>{t('home.header')}
                <span>{t('home.header-a')}</span></h1>
            <img src={!isNight ? soldiersWhite : soldiersBlack} className='header-bcg' alt='header night vision' />
        </div>
    );
};

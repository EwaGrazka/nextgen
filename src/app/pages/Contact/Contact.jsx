import React from 'react';
import bcgSubpage from '../../../assets/bcg-white.jpg';
import bcgSubpageG from '../../../assets/bcg-green.jpg';

import './Contact.scss'
import map from '../../../assets/map.png'
import mapG from '../../../assets/mapG.png'
import { useTranslation } from 'react-i18next';
import { SubpageHeader } from '../../components/SubpageHeader/SubpageHeader';


export const Contact = ({ isNight }) => {
    const { t, i18n } = useTranslation('common');

    return (
        <div className={isNight ? 'contact-container-n' : 'contact-container'}>
            <SubpageHeader isNight={isNight} text={t('commons.links.contact')} />
            <div className='contact-content'>
                <p className='adress-wrapper'>
                    <span>{t('contact.street')}</span>
                    <span>{t('contact.city')}</span>
                    <span>{t('contact.phone')}</span>
                    <span>{t('contact.email')}</span>
                    <span>{t('contact.mswia')}</span>
                </p>
                <img src={isNight ? mapG : map} alt='map adresss' />
            </div>
        </div>
    );
};

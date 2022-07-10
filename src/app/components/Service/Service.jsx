import React from 'react';
import { useTranslation } from 'react-i18next';
import { Title } from '../Title/Title';
import './Service.scss'

import glassesG from '../../../assets/icons/glasses-g.png'
import glassesB from '../../../assets/icons/glasses-b.png'
import broomG from '../../../assets/icons/broom-g.png'
import broomB from '../../../assets/icons/broom-b.png'
import checklistG from '../../../assets/icons/checklist-g.png'
import checklistB from '../../../assets/icons/checklist-b.png'
import fixG from '../../../assets/icons/fix-g.png'
import fixB from '../../../assets/icons/fix-b.png'


import { ServicesOption } from '../ServicesOption/ServicesOption';

export const Service = ({ isNight }) => {
    const { t, i18n } = useTranslation('common');

    return (
        <section>
            <Title isNight={isNight} title={t('home.service.service')} />
            <p>{t('home.service.text-1')} <span className={'point bold'}>{t('home.service.text-1a')}</span></p>
            <div className='services-options-wrapper'>
                <ServicesOption serviceIMG={isNight ? fixG : fixB} serviceName={t('home.service.fix')} />
                <ServicesOption serviceIMG={isNight ? glassesG : glassesB} serviceName={t('home.service.modify')} />
                <ServicesOption serviceIMG={isNight ? checklistG : checklistB} serviceName={t('home.service.overview')} />
                <ServicesOption serviceIMG={isNight ? broomG : broomB} serviceName={t('home.service.cleaning')} />
            </div>

        </section >
    );
};

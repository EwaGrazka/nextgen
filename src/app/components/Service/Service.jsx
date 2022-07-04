import React from 'react';
import { useTranslation } from 'react-i18next';
import { Title } from '../Title/Title';
import './Service.scss'

export const Service = ({ isNight }) => {
    const { t, i18n } = useTranslation('common');

    return (
        <section>
            <Title isNight={isNight} title={t('home.service.service')} />
            <p>{t('home.service.text-1')}</p>
            <p>{t('home.service.text-1a')}</p>
            <ul className={isNight ? 'service-list green' : 'service-list blue'}>
                <li><span className='point'>- </span>{t('home.service.list-a')}</li>
                <li><span className='point'>- </span>{t('home.service.list-b')}</li>
                <li><span className='point'>- </span>{t('home.service.list-c')}</li>
            </ul>
            <p className='service-p'> {t('home.service.text-2')}
            </p>
        </section>
    );
};

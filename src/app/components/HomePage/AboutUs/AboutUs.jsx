import React from 'react';

import './AboutUs.scss'
import { useTranslation } from 'react-i18next';
import { Title } from '../../Title/Title';
import { Quote } from '../../Quote/Quote';
import { CTA } from '../../CTA/CTA';
import { Service } from '../../Service/Service';

export const AboutUs = ({ isNight }) => {
    const { t } = useTranslation('common');

    return (
        <div className={isNight ? 'about-us-wrapper green' : 'about-us-wrapper blue'}>
            <Title isNight={isNight} title={t('home.meetUs')} />
            <div className='about-us'>
                <p>{t('home.about')}</p>
                <Quote isNight={isNight} />
                <p>{t('home.about-1')}</p>
            </div>
            <CTA isNight={isNight} text={t('home.cta-1')} />
            <Service isNight={isNight} />
        </div>
    );
};

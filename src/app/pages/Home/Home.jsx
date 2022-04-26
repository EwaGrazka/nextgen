import React from 'react';
import soldiersWhite from '../../../assets/soldiers-white.jpg';
import soldiersBlack from '../../../assets/soldiers-black.jpg';

import './Home.scss'
import { CTA } from '../../components/CTA/CTA';
import { Quote } from '../../components/Quote/Quote';
import { Service } from '../../components/Service/Service';
import { AdvantagesWrapper } from '../../components/AdvantagesWrapper/AdvantagesWrapper';
import { Title } from '../../components/Title/Title';
import { useTranslation } from 'react-i18next';

export const Home = ({ isNight }) => {
    const { t, i18n } = useTranslation('common');

    return (
        <>
            <div className='header-wrapper'>
                <h1 className='header-title'>{t('home.header')}
                    <span>{t('home.header-a')}</span></h1>
                <img src={!isNight ? soldiersWhite : soldiersBlack} className='header-bcg' alt='' />
            </div>
            <div className={isNight ? 'content-wrapper-n' : 'content-wrapper'}>
                <section>
                    <Title isNight={isNight} title='Poznaj nas' />
                    <p className='about-us'>
                        <h4>{t('home.about')}</h4>
                        <Quote isNight={isNight} />
                        <h4>{t('home.about-1')}</h4>
                    </p>
                </section>
                <CTA isNight={isNight} text={t('home.cta-1')} />
                <Service isNight={isNight} />
            </div>

            <section className={isNight ? 'thermovision-n' : 'thermovision'}>
                <Title isNight={isNight} title={t("home.thermovision")} />
                <p>{t("home.thermovisionText")}</p>
            </section>
            <AdvantagesWrapper isNight={isNight} />
            <section className={isNight ? 'nightvision-n' : 'nightvision'}>
                <Title isNight={isNight} title={t("home.nightvision")} />
                <p>{t("home.nightvisionText")}</p></section>
        </>

    );
};

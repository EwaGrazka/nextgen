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
import { SectionHome } from '../../components/SectionHome/SectionHome';

export const Home = ({ isNight }) => {
    const { t } = useTranslation('common');

    return (
        <>
            <div className='header-wrapper'>
                <h1 className='header-title'>{t('home.header')}
                    <span>{t('home.header-a')}</span></h1>
                <img src={!isNight ? soldiersWhite : soldiersBlack} className='header-bcg' alt='header night vision' />
            </div>
            <div className={isNight ? 'content-wrapper-n' : 'content-wrapper'}>
                <section>
                    <Title isNight={isNight} title={t('home.meetUs')} />
                    <div className='about-us'>
                        <span>{t('home.about')}</span>
                        <Quote isNight={isNight} />
                        <span>{t('home.about-1')}</span>
                    </div>
                </section>
                <CTA isNight={isNight} text={t('home.cta-1')} />
                <Service isNight={isNight} />
            </div>
            <SectionHome isNight={isNight}
                title={t("home.thermovision")}
                text1={t('home.thermovisionText-a')}
                text2={t('home.thermovisionText-b')}
                textIMG={t('home.thermovisionText-c')}
                reverse={false} />

            <AdvantagesWrapper isNight={isNight} />

            <SectionHome
                reverse={true}
                isNight={isNight}
                title={t("home.nightvision")}
                text1={t("home.nightvisionText-a")}
                textIMG={t("home.nightvisionText-b")}
                text2={t("home.nightvisionText-c")} />
        </>

    );
};

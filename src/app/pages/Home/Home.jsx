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
import { Header } from '../../components/HomePage/Header/Header';
import { AboutUs } from '../../components/HomePage/AboutUs/AboutUs';

export const Home = ({ isNight }) => {
    const { t } = useTranslation('common');

    return (
        <>
            <Header isNight={isNight} />

            <AboutUs isNight={isNight} />

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

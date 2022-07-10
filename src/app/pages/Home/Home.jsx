import React from 'react';

import './Home.scss'

import { AdvantagesWrapper } from '../../components/AdvantagesWrapper/AdvantagesWrapper';
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
                section='thermovision' />

            <AdvantagesWrapper isNight={isNight} />

            <SectionHome
                isNight={isNight}
                title={t("home.nightvision")}
                section='nightvision' />
            <p className={isNight ? 'green closure' : 'blue closure'}>{t("home.closure")}</p>
        </>

    );
};

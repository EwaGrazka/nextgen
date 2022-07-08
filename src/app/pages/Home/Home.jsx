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
            <p className={isNight ? 'green closure' : 'blue closure'}>NextGen tworzą ludzie z pasją, którzy chętnie zrozumieją Twoje potrzeby, przeprowadzą Cię przez cały proces doboru urządzenia i zaproponują optymalne rozwiązanie cenowe. Wyjaśnimy różnice w parametrach technicznych i uczciwie opowiemy o zaletach i ograniczeniach z nich wynikających. Nie ma rozwiązań uniwersalnych, nadających się dla wszystkich, dlatego dbając o świadome decyzje naszych Klientów zachęcamy do testów porównawczych wybranych rozwiązań.</p>
        </>

    );
};

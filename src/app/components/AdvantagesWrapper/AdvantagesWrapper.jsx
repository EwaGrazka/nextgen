import React from 'react';
import { Advantage } from '../Advantage/Advantage';
import './AdvantagesWrapper.scss';
import legal from '../../../assets/legal.png'
import glasses from '../../../assets/glasses.png'
import truck from '../../../assets/truck.png'
import idea from '../../../assets/idea.png'
import legalG from '../../../assets/legal-g.png'
import glassesG from '../../../assets/glasses-g.png'
import truckG from '../../../assets/truck-g.png'
import ideaG from '../../../assets/idea-g.png'
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

export const AdvantagesWrapper = ({ isNight }) => {
    const { t, i18n } = useTranslation('common');

    return (
        <div className={isNight ? 'advantages-wrapper green' : 'advantages-wrapper blue'}>
            <Advantage isNight={isNight} ico={isNight ? glassesG : glasses} title={t("home.advantages.title1")} description={t("home.advantages.desc1")} />
            <Advantage isNight={isNight} ico={isNight ? ideaG : idea} title={t("home.advantages.title2")} description={t("home.advantages.desc2")} />
            <Advantage isNight={isNight} ico={isNight ? legalG : legal} title={t("home.advantages.title3")} description={t("home.advantages.desc3")} />
            <Advantage isNight={isNight} ico={isNight ? truckG : truck} title={t("home.advantages.title4")} description={t("home.advantages.desc4")} />
        </div>
    );
};

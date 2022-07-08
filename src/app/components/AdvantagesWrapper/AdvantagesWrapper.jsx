import React from 'react';
import { Advantage } from '../Advantage/Advantage';
import './AdvantagesWrapper.scss';
import deliveryB from '../../../assets/icons/delivery-b.png'
import deliveryG from '../../../assets/icons/delivery-g.png'
import helpB from '../../../assets/icons/help-b.png'
import helpG from '../../../assets/icons/help-g.png'
import lawB from '../../../assets/icons/law-b.png'
import lawG from '../../../assets/icons/law-g.png'
import noctoB from '../../../assets/icons/nocto-b.png'
import noctoG from '../../../assets/icons/nocto-g.png'
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import { ServicesOption } from '../ServicesOption/ServicesOption';


export const AdvantagesWrapper = ({ isNight }) => {
    const { t, i18n } = useTranslation('common');

    return (
        <div className={isNight ? 'advantages-wrapper green' : 'advantages-wrapper blue'}>
            <ServicesOption serviceIMG={isNight ? helpG : helpB} serviceName={t("home.advantages.title1")} />
            <ServicesOption serviceIMG={isNight ? noctoG : noctoB} serviceName={t("home.advantages.title2")} />
            <ServicesOption serviceIMG={isNight ? lawG : lawB} serviceName={t("home.advantages.title3")} />
            <ServicesOption serviceIMG={isNight ? deliveryG : deliveryB} serviceName={t("home.advantages.title4")} />
        </div>
    );
};

import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.scss';

export const Footer = ({ isNight }) => {
    const { t, i18n } = useTranslation('common');

    return (

        <div className={isNight ? 'footer-container-n' : 'footer-container'} >
            {t("footer.rights")} < a href='https://www.linkedin.com/in/ewa-gr%C4%85zka-789461161/' > egrazka</a >.
        </div >


    );
};

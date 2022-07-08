import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Footer.scss';
import facebookLogo from '../../../assets/facebook-logo.png';
import facebookLogoG from '../../../assets/facebook-logo-g.png'
import instaLogo from '../../../assets/insta-logo.png'
import instaLogoG from '../../../assets/insta-logo-g.png'



export const Footer = ({ isNight }) => {
    const { t } = useTranslation('common');

    return (

        <div className={isNight ? 'footer-container green cta-border-green' : 'footer-container blue cta-border-blue'} >
            <div style={{ marginTop: '30px' }}>
                {t("footer.rights")} < a target="_blank" href='https://www.linkedin.com/in/ewa-gr%C4%85zka-789461161/' > egrazka</a >.
            </div>
            <div style={{ marginTop: '30px' }}>
                <Link
                    to={{
                        pathname: "/privacy",
                    }}
                >{t('commons.links.privacy')}</Link>
                <Link
                    to={{
                        pathname: "/rules",
                    }}
                >{t("home.rules")}</Link>
            </div>
            <div>
                <div className={isNight ? 'green-border ico-container' : 'blue-border ico-container'}>
                    <a rel="noreferrer" target='_blank' href='https://www.facebook.com/nextgennightvision' ><img src={isNight ? facebookLogoG : facebookLogo} alt='facebook icon' /></a >
                </div>
                <div className={isNight ? 'green-border ico-container' : 'blue-border ico-container'}>
                    <a rel="noreferrer" target='_blank' href='https://www.instagram.com/nnvs_pl/' ><img src={isNight ? instaLogoG : instaLogo} alt='instagram icon' /></a >
                </div>
            </div>
        </div >


    );
};

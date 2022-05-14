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

        <div className={isNight ? 'footer-container-n' : 'footer-container'} >
            <div>
                {t("footer.rights")} < a href='https://www.linkedin.com/in/ewa-gr%C4%85zka-789461161/' > egrazka</a >.
            </div>
            <div>
                <Link
                    to={{
                        pathname: "/privacy",
                    }}
                >{t('commons.links.privacy')}</Link>
                <Link
                    to={{
                        pathname: "/rules",
                    }}
                >Regulamin</Link>
            </div>
            <div>
                <div className='ico-container'>
                    <a rel="noreferrer" target='_blank' href='https://www.facebook.com/nextgennightvision' ><img src={isNight ? facebookLogoG : facebookLogo} alt='facebook icon' /></a >
                </div>
                <div className='ico-container'>
                    <a rel="noreferrer" target='_blank' href='https://www.instagram.com/nnvs_pl/' ><img src={isNight ? instaLogoG : instaLogo} alt='instagram icon' /></a >
                </div>
            </div>
        </div >


    );
};

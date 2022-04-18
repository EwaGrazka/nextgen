import logoW from '../../../assets/nextgen-logo-white.png';
import logoB from '../../../assets/nextgen-logo-black.png';
import { LanguageButton } from "../LanguageButton/LanguageButton";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import "./Menu.scss";



function Menu({ isNight, setIsNight }) {

    const { t, i18n } = useTranslation('common');
    const location = useLocation();

    return <div className='menu-container'>
        <ul className={!isNight ? 'menu-wrapper' : 'menu-wrapper-n'}>
            <li className={!isNight ? 'menu-link' : 'menu-link-n'} ><Link style={{ color: location.pathname === "/" ? (isNight ? '#23b213' : '#08C3D5') : '' }}
                to={{
                    pathname: "/",
                }}
            >{t('commons.links.home')}</Link></li>
            <li className={!isNight ? 'menu-link' : 'menu-link-n'} ><Link style={{ color: location.pathname === "/products" ? (isNight ? '#23b213' : '#08C3D5') : '' }}
                to={{
                    pathname: "/products",
                }}
            >{t('commons.links.products')}</Link></li>
            <li className={!isNight ? 'menu-link' : 'menu-link-n'} ><Link style={{ color: location.pathname === "/faq" ? (isNight ? '#23b213' : '#08C3D5') : '' }}
                to={{
                    pathname: "/faq",
                }}
            >{t('commons.links.faq')}</Link></li>
            <li className={!isNight ? 'menu-link' : 'menu-link-n'} ><Link style={{ color: location.pathname === "/contact" ? (isNight ? '#23b213' : '#08C3D5') : '' }}
                to={{
                    pathname: "/contact",
                }}
            >{t('commons.links.contact')}</Link></li>
        </ul>
    </div>
}

export default Menu;

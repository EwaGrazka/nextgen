import logoW from '../../../assets/nextgen-logo-white.png';
import logoB from '../../../assets/nextgen-logo-black.png';
import { LanguageButton } from "../LanguageButton/LanguageButton";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import "./Menu.scss";



function Menu({ night, setNight }) {

    const { t, i18n } = useTranslation('common');
    const location = useLocation();

    return <div className='menu-container'>
        <ul className='menu-wrapper'>

            <li className='menu-link' ><Link style={{ color: location.pathname === "/products" ? '#08C3D5' : '#000' }}
                to={{
                    pathname: "/products",
                }}
            >{t('commons.links.products')}</Link></li>
            <li className='menu-link' ><Link style={{ color: location.pathname === "/faq" ? '#08C3D5' : '#000' }}
                to={{
                    pathname: "/faq",
                }}
            >{t('commons.links.faq')}</Link></li>
            <li className='menu-link' ><Link style={{ color: location.pathname === "/contact" ? '#08C3D5' : '#000' }}
                to={{
                    pathname: "/contact",
                }}
            >{t('commons.links.contact')}</Link></li>
        </ul>
    </div>
}

export default Menu;

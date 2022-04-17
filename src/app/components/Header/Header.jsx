import "./Header.scss";
import logoW from '../../../assets/nextgen-logo-white.png';
import logoB from '../../../assets/nextgen-logo-black.png';
import { LanguageButton } from "../LanguageButton/LanguageButton";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";



function Header({ night, setNight }) {

    const { t, i18n } = useTranslation('common');
    const location = useLocation();

    const [colorPL, setColorPL] = useState('#fcc200')
    const [colorEN, setColorEN] = useState('transparent')

    const navBarHandleButtonPL = () => {
        i18n.changeLanguage('pl')
        setColorPL("#fcc200")
        setColorEN('transparent')
        localStorage.setItem('language', 'pl')
    }

    const navBarHandleButtonEN = () => {
        i18n.changeLanguage('en')
        setColorEN("#fcc200")
        setColorPL('transparent')
        localStorage.setItem('language', 'en')
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        !(localStorage.getItem('language')) && navBarHandleButtonPL()
    }, []);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        localStorage.getItem('language') === 'pl' ? navBarHandleButtonPL() : navBarHandleButtonEN()
    }, []);




    return <div className={night ? "header-container-n" : "header-container"} >

        <img src={night ? logoW : logoB} className='header-logo' alt='logo nextgen' />
        <button onClick={() => setNight(!night)}>{night ? 'Night' : 'Day'}</button>
        <div className='languages-button-wrapper'>
            <div onClick={() => navBarHandleButtonPL()}>
                <LanguageButton language='pl' color={colorPL} />
            </div>
            <div onClick={() => navBarHandleButtonEN()}>
                <LanguageButton language='en' color={colorEN} marginLeft />
            </div>
        </div>
        <div className='menu-line-menu-wrapper'>
            <ul>
                <li style={{ fontWeight: location.pathname === "/products" ? 'bold' : null }} ><Link
                    to={{
                        pathname: "/products",
                    }}
                >{t('commons.links.products')}</Link></li>
                <li style={{ fontWeight: location.pathname === "/faq" ? 'bold' : null }} ><Link
                    to={{
                        pathname: "/faq",
                    }}
                >{t('commons.links.faq')}</Link></li>
                <li style={{ fontWeight: location.pathname === "/contact" ? 'bold' : null }} ><Link
                    to={{
                        pathname: "/contact",
                    }}
                >{t('commons.links.contact')}</Link></li>
            </ul>
        </div>
    </ div>
}

export default Header;

import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import "./MenuMobile.scss";

function MenuMobile({ isNight }) {

    const { t } = useTranslation('common');
    const location = useLocation();


    return (
        <div className={isNight ? 'menu-mobile-container green' : 'menu-mobile-container blue'}>
            <ul className='menu-mobile-wrapper'>

                <li className={isNight ? 'menu-mobile-link' : 'menu-mobile-link-blue'} >
                    <Link
                        style={{ color: location.pathname === "/nextgen" ? (isNight ? '#23b213' : '#08C3D5') : '' }}
                        to={{ pathname: "/nextgen" }}
                    >{t('commons.links.home')}</Link>
                </li>

                <div className='link-category-wrapper'>

                    <li className={isNight ? 'menu-mobile-link' : 'menu-mobile-link-blue'} >
                        <Link style={{ color: location.pathname === "/products" ? (isNight ? '#23b213' : '#08C3D5') : '' }}
                            to={{ pathname: "/products" }}
                        >{t('commons.links.products')}
                        </Link>
                    </li>





                </div>

                <li className={isNight ? 'menu-mobile-link' : 'menu-mobile-link-blue'} >
                    <Link
                        style={{ color: location.pathname === "/faq" ? (isNight ? '#23b213' : '#08C3D5') : '' }}
                        to={{ pathname: "/faq" }}
                    >{t('commons.links.faq')}
                    </Link>
                </li>

                <li className={isNight ? 'menu-mobile-link' : 'menu-mobile-link-blue'} >
                    <Link style={{ color: location.pathname === "/contact" ? (isNight ? '#23b213' : '#08C3D5') : '' }}
                        to={{ pathname: "/contact" }}
                    >{t('commons.links.contact')}
                    </Link>
                </li>

            </ul >


        </ div>
    )
}

export default MenuMobile;

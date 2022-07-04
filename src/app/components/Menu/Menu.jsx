import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import "./Menu.scss";



function Menu({ isNight }) {

    const { t } = useTranslation('common');
    const location = useLocation();

    return (
        <div className={isNight ? 'menu-container-n' : 'menu-container'}>

            <ul className='menu-wrapper'>

                <li className='menu-link' >
                    <Link
                        style={{ color: location.pathname === "/nextgen" ? (isNight ? '#23b213' : '#08C3D5') : '' }}
                        to={{ pathname: "/nextgen" }}
                    >{t('commons.links.home')}</Link>
                </li>

                {/* menu options show on hover */}

                <div className='link-category-wrapper'>

                    <li className='menu-link' >
                        <Link style={{ color: location.pathname === "/products" ? (isNight ? '#23b213' : '#08C3D5') : '' }}
                            to={{ pathname: "/products" }}
                        >{t('commons.links.products')}
                        </Link>
                    </li>



                    {/* <div className={isNight ? 'category-menu category-menu-n' : 'category-menu'}> */}
                    {/* <ul className={isNight ? 'menu-hover-n' : 'menu-hover'}>

                            <li>
                                <Link to={{
                                    pathname: "/products#thermovision"
                                }}> {t("home.thermovision")}
                                </Link>
                            </li>

                            <li>
                                <Link to={{
                                    pathname: "/products#nightvision"
                                }}> {t("home.nightvision")}
                                </Link>
                            </li>

                            <li>
                                <Link to={{
                                    pathname: "/products#accesories"
                                }}>{t("home.accesories")}
                                </Link>
                            </li>

                        </ul> */}
                    {/* </div> */}

                </div>

                <li className='menu-link' >
                    <Link
                        style={{ color: location.pathname === "/faq" ? (isNight ? '#23b213' : '#08C3D5') : '' }}
                        to={{ pathname: "/faq" }}
                    >{t('commons.links.faq')}
                    </Link>
                </li>

                <li className='menu-link' >
                    <Link style={{ color: location.pathname === "/contact" ? (isNight ? '#23b213' : '#08C3D5') : '' }}
                        to={{ pathname: "/contact" }}
                    >{t('commons.links.contact')}
                    </Link>
                </li>

            </ul >

        </div >
    )
}

export default Menu;

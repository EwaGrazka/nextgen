import React from 'react';
import { useTranslation } from 'react-i18next';
import { Products } from '../../pages/Products/Products';
import { SubpageHeader } from '../SubpageHeader/SubpageHeader';
import './AllProductsWrapper.scss';

export const AllProductsWrapper = ({ isNight }) => {
    const { t, i18n } = useTranslation('common');

    return (

        <div className={isNight ? 'products-container-n' : 'products-container'}>
            <SubpageHeader text={t('commons.links.products')} isNight={isNight} />
            <Products id='thermovision' isNight={isNight} title={t("home.thermovision")} />
            <Products id='nightvision' isNight={isNight} title={t("home.nightvision")} />
            <Products id='accesories' isNight={isNight} title={t("home.accesories")} />
        </div>
    );
};

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Products } from '../../pages/Products/Products';
import { SubpageHeader } from '../SubpageHeader/SubpageHeader';
import './AllProductsWrapper.scss';

export const AllProductsWrapper = ({ isNight }) => {
    const { t, i18n } = useTranslation('common');

    return (

        <div className={isNight ? 'products-container-n' : 'products-container'}>

            <SubpageHeader text={t('commons.links.products')} isNight={isNight} />
            <Products isNight={isNight} title='Termowizja' />
            <Products isNight={isNight} title='Noktowizja' />
            <Products isNight={isNight} title='Akcesoria' />
        </div>


    );
};

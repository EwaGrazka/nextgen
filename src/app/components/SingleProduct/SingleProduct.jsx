import React from 'react';
import './SingleProduct.scss';
import { useTranslation } from 'react-i18next';

export const SingleProduct = ({ isNight, productIMG, price, title }) => {
    const { t, i18n } = useTranslation('common');

    return (

        <div className={!isNight ? 'product-n' : 'product'}>
            <img className='product-img' src={productIMG} />
            <h8 className='product-title'>{title} <span>{price}</span></h8>
        </div>

    );
};

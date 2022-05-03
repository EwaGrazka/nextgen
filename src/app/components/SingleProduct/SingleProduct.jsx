import React from 'react';
import './SingleProduct.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const SingleProduct = ({ isNight, productIMG, price, title, id }) => {
    const { t, i18n } = useTranslation('common');

    return (
        <div className={!isNight ? 'product-n' : 'product'}>


            <Link to={{
                pathname: `/product${id}`
            }}>  <img className='product-img' src={productIMG} />
                <h8 className='product-title'>{title} <span>{price}</span></h8>
            </Link>

        </div>
    );
};
import React from 'react';
import bcgSubpage from '../../../assets/bcg-white.jpg';
import bcgSubpageG from '../../../assets/bcg-green.jpg';

import './Products.scss';
import { useTranslation } from 'react-i18next';
import { SingleProduct } from '../../components/SingleProduct/SingleProduct'
import { ProductsBase } from '../../base/ProductsBase.jsx';
import { useLocation } from 'react-router-dom';


export const Products = ({ isNight, title, id }) => {
    const { t, i18n } = useTranslation('common');
    const location = useLocation();
    console.log(location.hash)

    return (
        <>
            <h3 id={id} className={!isNight ? 'category-title' : 'category-title-n'} isNight={isNight}>{title}</h3>
            <div className='products-content'>
                {ProductsBase.map((p) => (
                    <SingleProduct id={p.id} isNight={isNight} productIMG={p.examplePhoto} price={p.price} title={p.title} />
                ))}
            </div>
        </>

    );
};

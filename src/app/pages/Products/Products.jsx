import React from 'react';

import './Products.scss';
import { useTranslation } from 'react-i18next';
import { SingleProduct } from '../../components/SingleProduct/SingleProduct'
import { ProductsBase } from '../../base/ProductsBase.jsx';

export const Products = ({ isNight, title, id }) => {
    const { t, i18n } = useTranslation('common');

    return (
        <>
            <h3
                className={isNight ? 'category-title green' : 'category-title blue'}
            >
                {title}
            </h3>
            <div className={isNight ? 'products-content green' : 'products-content blue'}>
                {ProductsBase.map((p) => (
                    <SingleProduct id={p.id} isNight={isNight} productIMG={p.examplePhoto} price={p.price} title={p.title} />
                ))}
            </div>
        </>

    );
};

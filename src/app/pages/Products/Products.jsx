import React from 'react';
import bcgSubpage from '../../../assets/bcg-white.jpg';
import bcgSubpageG from '../../../assets/bcg-green.jpg';

import './Products.scss';
import examplePhoto from '../../../assets/NVG-50-940x740-1.png';
import { useTranslation } from 'react-i18next';
import { SubpageHeader } from '../../components/SubpageHeader/SubpageHeader';
import { SingleProduct } from '../../components/SingleProduct/SingleProduct'
import { Title } from '../../components/Title/Title';

export const Products = ({ isNight, title }) => {
    const { t, i18n } = useTranslation('common');
    const productsArray = [
        {
            title: 'Example product 1',
            price: '21,000.37 zł',
            productIMG: examplePhoto,
        },
        {
            title: 'Example product 2',
            price: '21,000.37 zł',
            productIMG: examplePhoto,
        },
        {
            title: 'Example product 3',
            price: '21,000.37 zł',
            productIMG: examplePhoto,
        },
        {
            title: 'Example product 4',
            price: '21,000.37 zł',
            productIMG: examplePhoto,
        },
        {
            title: 'Example product 5',
            price: '21,000.37 zł',
            productIMG: examplePhoto,
        },
        {
            title: 'Example product 6',
            price: '21,000.37 zł',
            productIMG: examplePhoto,
        }
    ]
    return (
        <>
            <h3 className='category-title' isNight={isNight}>{title}</h3>

            <div className='products-content'>
                {productsArray.map((p) => (
                    <SingleProduct isNight={isNight} productIMG={p.productIMG} price={p.price} title={p.title} />
                ))}
            </div>
        </>

    );
};

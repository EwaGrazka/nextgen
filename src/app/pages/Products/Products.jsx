import React from 'react';
import bcgSubpage from '../../../assets/bcg-white.jpg';
import bcgSubpageG from '../../../assets/bcg-green.jpg';

import './Products.scss';
import examplePhoto from '../../../assets/NVG-50-940x740-1.png';
import { useTranslation } from 'react-i18next';

export const Products = ({ isNight }) => {
    const { t, i18n } = useTranslation('common');

    return (
        <div className={isNight ? 'products-container-n' : 'products-container'}>
            <div className='subpage-header'>
                <img className='products-header-img' src={isNight ? bcgSubpageG : bcgSubpage} />
                <h1>{t('commons.links.products')}</h1>
            </div>
            <div className='products-content'>
                <div className='product'>
                    <img className='product-img' src={examplePhoto} />
                    <h8 className='product-title'>{t('products.exampleTitle')} <span>21,000.37 zł</span></h8>

                </div>
                <div className='product'>
                    <img className='product-img' src={examplePhoto} />
                    <h8 className='product-title'>{t('products.exampleTitle')} <span>21,000.37 zł</span></h8>

                </div>
                <div className='product'>
                    <img className='product-img' src={examplePhoto} />
                    <h8 className='product-title'>{t('products.exampleTitle')} <span>21,000.37 zł</span></h8>

                </div>
                <div className='product'>
                    <img className='product-img' src={examplePhoto} />
                    <h8 className='product-title'>{t('products.exampleTitle')} <span>21,000.37 zł</span></h8>

                </div>
                <div className='product'>
                    <img className='product-img' src={examplePhoto} />
                    <h8 className='product-title'>{t('products.exampleTitle')}<span>21,000.37 zł</span></h8>

                </div>
                <div className='product'>
                    <img className='product-img' src={examplePhoto} />
                    <h8 className='product-title'>{t('products.exampleTitle')} <span>21,000.37 zł</span></h8>

                </div>
            </div>


        </div>
    );
};

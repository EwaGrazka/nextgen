import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SubpageHeader } from '../SubpageHeader/SubpageHeader';
import { ProductsBase } from '../../base/ProductsBase';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import './ProductPage.scss'
import { Title } from '../Title/Title';


export const ProductPage = ({ isNight }) => {
    const { t, i18n } = useTranslation('common');
    const [chosenProduct, setChosenProduct] = useState('');

    useEffect(() => {
        ProductsBase.map((p) => {
            if (window.location.pathname.includes(p.id)) {
                setChosenProduct(p);
            }
        });
    }, [window.location.pathname]);

    return (
        <div className={isNight ? 'products-container green' : 'products-container blue'}>
            <SubpageHeader text={chosenProduct.title} isNight={isNight} />
            <div style={{ padding: '0 100px' }} className={isNight ? 'content-wrapper green' : 'content-wrapper blue'}>
                <Title isNight={isNight} title={chosenProduct.lead} />

                <div className={isNight ? 'product-main-container-n' : 'product-main-container'}>
                    <div className='product-gallery'>
                        {chosenProduct && <ImageGallery items={chosenProduct?.productIMG} />}
                    </div>
                    <p className='product-description'>{chosenProduct?.description}

                    </p>
                </div>
                <Title isNight={isNight} title='Charakterystyka' />

                <ul className={isNight ? 'product-advantages-list-n' : 'product-advantages-list'}>
                    {chosenProduct?.advantages?.map((advantage) => {
                        return <li>{advantage}</li>
                    })}
                </ul>
                <Title isNight={isNight} title='Specyfikacja' />

                <ul className={isNight ? 'product-specification-wrapper-n' : 'product-specification-wrapper'} >

                    {chosenProduct?.specification?.map((row) => {
                        return <li className='product-specification-row'>
                            <span className='specification-name'>{row.name}</span>
                            <span className='specification'>{row.data}</span>
                        </li>
                    })}

                    <span style={{ fontSize: '14px', width: '100%', textAlign: 'center' }}>Specyfikacja może ulec zmianie bez powiadomienia. Zdjęcia mają wyłącznie charakter poglądowy.</span>
                </ul>

            </div>
        </div >
    );
};

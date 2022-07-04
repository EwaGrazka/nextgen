import React from 'react';
import './SingleProduct.scss';
import { Link } from 'react-router-dom';

export const SingleProduct = ({ isNight, productIMG, price, title, id }) => {

    return (
        <div className={isNight ? 'product green green-border' : 'product blue blue-border'}>


            <Link to={{
                pathname: `/product${id}`
            }}>  <img className='product-img' src={productIMG} alt='product' />
                <h8 className='product-title green
                '>{title} <span >{price}</span></h8>
            </Link>

        </div>
    );
};
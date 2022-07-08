import React from 'react';
import { useTranslation } from 'react-i18next';
import './ServicesOption.scss'

export const ServicesOption = ({ serviceIMG, serviceName }) => {

    return (
        <div className='services-option-container'>
            <img className='services-icon' src={serviceIMG} alt='services icon' />
            <h3 className='services-name'>{serviceName}</h3>
        </div>
    );
};

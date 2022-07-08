import React from 'react';
import './TextSection.scss';

export const TextSection = ({ title1, text1, title2, text2 }) => {

    return (
        <div className='text-img-section-container'>
            <div className='text-section-wrapper'>
                <p>{text1}</p>
                <h5 style={{ marginTop: '20px' }} className='text-section-title'>{title1}</h5>
            </div>
            <div className='text-section-wrapper'>
                <h5 className='text-section-title'><span className='point'>{title2}</span></h5>
                <p>{text2}</p>
            </div>
        </div>
    );
};
import React from 'react';
import './Advantage.scss';

export const Advantage = ({ title, description, ico, isNight }) => {
    return (

        <div className={isNight ? 'advantage-container green green-border' : 'advantage-container blue blue-border'}>
            <div className='icon-wrapper'>
                <img src={ico} alt='icon' />
            </div>
            <h6>{title}</h6>
            <p>{description}</p>
        </div>
    );
};

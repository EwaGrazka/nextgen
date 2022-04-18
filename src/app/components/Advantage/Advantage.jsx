import React from 'react';
import './Advantage.scss';
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";

export const Advantage = ({ title, description, ico, isNight }) => {
    return (

        <div className={isNight ? 'advantage-container-n' : 'advantage-container'}>
            <div className='icon-wrapper'>
                <img src={ico} />
            </div>
            <h6>{title}</h6>
            <p>{description}</p>
        </div>


    );
};

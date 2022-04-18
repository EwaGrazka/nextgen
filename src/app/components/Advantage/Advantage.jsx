import React from 'react';
import './Advantage.scss';
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";

export const Advantage = ({ title, description, ico }) => {
    defineLordIconElement(loadAnimation);
    return (

        <div className='advantage-container'>
            <img src={ico} />
            <h6>{title}</h6>
            <p>{description}</p>
        </div>


    );
};

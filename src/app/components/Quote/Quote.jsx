import React from 'react';
import './Quote.scss'
import quotation from '../../../assets/quote.png'

export const Quote = () => {
    return (
        <div className='quote-container'>
            <img src={quotation} alt='quotation marks' />
            <p>Naszym wyzwaniem jest <span className='blue'>ciągłe rozwijanie</span> najnowocześniejszych produktów i <span className='blue'>przekraczanie oczekiwań</span> klientów</p>

        </div>
    );
};

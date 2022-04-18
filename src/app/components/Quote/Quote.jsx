import React from 'react';
import './Quote.scss'
import quotation from '../../../assets/quote.png'
import quotationGreen from '../../../assets/quote-green.png'

export const Quote = ({ isNight }) => {
    return (
        <div className='quote-container'>
            <img src={isNight ? quotationGreen : quotation} alt='quotation marks' />
            <p>Naszym wyzwaniem jest <span className={isNight ? 'green' : 'blue'}>ciągłe rozwijanie</span> najnowocześniejszych produktów i <span className={isNight ? 'green' : 'blue'}>przekraczanie oczekiwań</span> klientów</p>

        </div>
    );
};

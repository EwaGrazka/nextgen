import React from 'react';
import './CTA.scss';

export const CTA = ({ text }) => {
    return (

        <div className='section-container cta-container'>
            {text}
            <div className='cta-buttons-wrapper'>
                <button>Skontaktuj się z nami</button>
                <button>Zapoznaj się z produktami</button>
            </div>
        </div>


    );
};

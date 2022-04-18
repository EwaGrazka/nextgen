import React from 'react';
import './CTA.scss';

export const CTA = ({ text, isNight }) => {
    return (

        <div className={isNight ? 'section-container cta-container-n' : 'section-container cta-container'}>
            {text}
            <div className='cta-buttons-wrapper'>
                <button>Skontaktuj się z nami</button>
                <button>Zapoznaj się z produktami</button>
            </div>
        </div>


    );
};

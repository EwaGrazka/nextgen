import React from 'react';
import './LanguageButton.scss';

export const LanguageButton = ({ language, marginLeft, color }) => {
    return (

        <button style={{ marginLeft: marginLeft ? '50px' : "0", backgroundColor: color }} className='language-button'>
            {language}
        </button>

    );
};

import React from 'react';
import './LanguageButton.scss';

export const LanguageButton = ({ language, marginLeft, color }) => {
    return (

        <button style={{ color: color }} className='language-button'>
            {language}
        </button>

    );
};

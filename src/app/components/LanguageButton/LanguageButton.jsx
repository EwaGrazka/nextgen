import React from 'react';
import './LanguageButton.scss';

export const LanguageButton = ({ language, color, isNight }) => {
    return (

        <button
            style={{ color: color }}
            className={isNight ? 'language-button-n' : 'language-button'} >
            {language}
        </button >

    );
};

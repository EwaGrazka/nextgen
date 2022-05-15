import React from 'react';
import { useTranslation } from 'react-i18next';
import './SubpageHeader.scss'

export const SubpageHeader = ({ isNight, text }) => {

    return (
        <div className={isNight ? 'subpage-header-n' : 'subpage-header'}>
            <div className={isNight ? 'background-green' : 'background-blue'}></div>
            <h1>{text}</h1>

        </div>
    );
};

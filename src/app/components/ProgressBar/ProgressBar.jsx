import React from 'react';

import './ProgressBar.scss'


export const ProgressBar = ({ isNight, scrollValue }) => {

    return (
        <progress
            className={isNight ? 'progress-bar-n' : 'progress-bar'}
            id="progress-bar"
            max="100"
            value={scrollValue}
        >
        </progress>
    );
};

import React from 'react';
import './Title.scss'

export const Title = ({ isNight, title }) => {
    return (
        <h5 className={isNight ? 'title-blue' : 'title-green'} >{title}</h5>
    );
};

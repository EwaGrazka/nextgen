import React from 'react';
import './Title.scss'

export const Title = ({ isNight, title }) => {
    return (
        <h5 className={isNight ? 'title green green-border' : 'title blue blue-border '} >{title}</h5>
    );
};

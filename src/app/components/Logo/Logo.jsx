

import React from 'react';
import { Link } from 'react-router-dom';

import logoW from '../../../assets/nextgen-logo-white.png';
import logoB from '../../../assets/nextgen-logo-black.png';

import './Logo.scss'


export const Logo = ({ isNight }) => {

    return (

        <Link to={{ pathname: "/" }}>
            <img src={isNight ? logoW : logoB} className='header-logo' alt='logo nextgen' />
        </Link>

    );
};




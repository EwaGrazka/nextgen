import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageButton } from '../LanguageButton/LanguageButton';
import './LanguageToggle.scss';

export const LanguageToggle = ({ isNight }) => {
    const { t, i18n } = useTranslation('common');

    const [colorPL, setColorPL] = useState((isNight ? '#23b213' : '#08C3D5'))
    const [colorEN, setColorEN] = useState('transparent')

    const navBarHandleButtonPL = () => {
        i18n.changeLanguage('pl')
        setColorPL((isNight ? '#23b213' : '#08C3D5'))
        setColorEN('')
        localStorage.setItem('language', 'pl')
    }

    const navBarHandleButtonEN = () => {
        i18n.changeLanguage('en')
        setColorEN((isNight ? '#23b213' : '#08C3D5'))
        setColorPL('')
        localStorage.setItem('language', 'en')
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        !(localStorage.getItem('language')) && navBarHandleButtonPL()
    }, [isNight]);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        localStorage.getItem('language') === 'pl' ? navBarHandleButtonPL() : navBarHandleButtonEN()
    }, [isNight]);
    return (
        <div className='languages-button-wrapper'>
            <div onClick={() => navBarHandleButtonPL()}>
                <LanguageButton isNight={isNight} language='pl' color={colorPL} />
            </div>
            <div onClick={() => navBarHandleButtonEN()}>
                <LanguageButton isNight={isNight} language='en' color={colorEN} marginLeft />
            </div>
        </div>


    );
};

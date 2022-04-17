import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageButton } from '../LanguageButton/LanguageButton';
import './LanguageToggle.scss';

export const LanguageToggle = ({ language, marginLeft, color }) => {
    const { t, i18n } = useTranslation('common');

    const [colorPL, setColorPL] = useState('#08C3D5')
    const [colorEN, setColorEN] = useState('transparent')

    const navBarHandleButtonPL = () => {
        i18n.changeLanguage('pl')
        setColorPL("#08C3D5")
        setColorEN('#000')
        localStorage.setItem('language', 'pl')
    }

    const navBarHandleButtonEN = () => {
        i18n.changeLanguage('en')
        setColorEN("#08C3D5")
        setColorPL('#000')
        localStorage.setItem('language', 'en')
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        !(localStorage.getItem('language')) && navBarHandleButtonPL()
    }, []);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        localStorage.getItem('language') === 'pl' ? navBarHandleButtonPL() : navBarHandleButtonEN()
    }, []);
    return (
        <div className='languages-button-wrapper'>
            <div onClick={() => navBarHandleButtonPL()}>
                <LanguageButton language='pl' color={colorPL} />
            </div>
            <div onClick={() => navBarHandleButtonEN()}>
                <LanguageButton language='en' color={colorEN} marginLeft />
            </div>
        </div>


    );
};

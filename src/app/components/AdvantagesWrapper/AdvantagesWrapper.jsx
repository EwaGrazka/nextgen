import React from 'react';
import { Advantage } from '../Advantage/Advantage';
import './AdvantagesWrapper.scss';
import legal from '../../../assets/legal.png'
import glasses from '../../../assets/glasses.png'
import truck from '../../../assets/truck.png'
import moon from '../../../assets/moon.png'

export const AdvantagesWrapper = () => {
    return (
        <div className='advantages-wrapper'>
            <Advantage ico={glasses} title='Fachowa pomoc' description='Doświadczeni pracownicy służący radą.' />
            <Advantage ico={moon} title='Profesjonalny sprzęt' description='Tylko uznane i sprawdzone rozwiązania.' />
            <Advantage ico={legal} title='Pełna legalność' description='Gwarancja legalności.' />
            <Advantage ico={truck} title='Szybka dostawa' description='Towar wysyłamy firmą kurierską.' />
        </div>
    );
};

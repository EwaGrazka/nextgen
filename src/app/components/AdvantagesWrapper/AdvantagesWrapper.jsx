import React from 'react';
import { Advantage } from '../Advantage/Advantage';
import './AdvantagesWrapper.scss';
import legal from '../../../assets/legal.png'
import glasses from '../../../assets/glasses.png'
import truck from '../../../assets/truck.png'
import moon from '../../../assets/moon.png'
import legalG from '../../../assets/legal-green.png'
import glassesG from '../../../assets/glasses-green.png'
import truckG from '../../../assets/truck-green.png'
import moonG from '../../../assets/moon-green.png'

export const AdvantagesWrapper = ({ isNight }) => {
    return (
        <div className={isNight ? 'advantages-wrapper-n' : 'advantages-wrapper'}>
            <Advantage isNight ico={isNight ? glassesG : glasses} title='Fachowa pomoc' description='Doświadczeni pracownicy służący radą.' />
            <Advantage isNight ico={isNight ? moonG : moon} title='Profesjonalny sprzęt' description='Tylko uznane i sprawdzone rozwiązania.' />
            <Advantage isNight ico={isNight ? legalG : legal} title='Pełna legalność' description='Gwarancja legalności.' />
            <Advantage isNight={isNight} ico={isNight ? truckG : truck} title='Szybka dostawa' description='Towar wysyłamy firmą kurierską.' />
        </div>
    );
};

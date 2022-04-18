import React from 'react';
import { Title } from '../Title/Title';
import './Service.scss'

export const Service = ({ isNight }) => {
    return (
        <section>
            <Title isNight={isNight} title='Serwis' />
            <p>Prowadzimy pełen serwis urządzeń noktowizyjnych wielu typów obejmujący naprawy, modyfikacje konstrukcyjne, przeglądy okresowe oraz czyszczenie sprzętu.</p><p>Obsługiwane przetworniki noktowizyjne:</p>
            <ul className={isNight ? 'service-list-n' : 'service-list'}>
                <li><span>- </span>Gen 2+</li>
                <li><span>- </span>Gen 3</li>
                <li><span>- </span>4G</li>
            </ul>
            <p className='service-p'> W sprzedaży posiadamy szeroki wybór przetworników noktowizyjnych, w wielu różnych formatach, które mogą być opcjonalnie zaopatrzone w funkcje autogatingu oraz zielony lub biały fosfor.
            </p>
        </section>
    );
};

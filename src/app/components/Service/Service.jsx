import React from 'react';
import './Service.scss'

export const Service = () => {
    return (
        <section>
            <h5>Serwis</h5>
            <p>Prowadzimy pełen serwis urządzeń noktowizyjnych wielu typów obejmujący naprawy, modyfikacje konstrukcyjne, przeglądy okresowe oraz czyszczenie sprzętu.</p><p>Obsługiwane przetworniki noktowizyjne:</p>
            <ul className='service-list'>
                <li><span>- </span>Gen 2+</li>
                <li><span>- </span>Gen 3</li>
                <li><span>- </span>4G</li>
            </ul>
            <p> W sprzedaży posiadamy szeroki wybór przetworników noktowizyjnych, w wielu różnych formatach, które mogą być opcjonalnie zaopatrzone w funkcje autogatingu oraz zielony lub biały fosfor.
            </p>
        </section>
    );
};

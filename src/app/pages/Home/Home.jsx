import React, { useEffect, useState } from 'react';
import soldiersWhite from '../../../assets/soldiers-white.jpg';
import soldiersBlack from '../../../assets/soldiers-black.jpg';

import './Home.scss'
import { CTA } from '../../components/CTA/CTA';
import { Quote } from '../../components/Quote/Quote';
import { Service } from '../../components/Service/Service';
import { AdvantagesWrapper } from '../../components/AdvantagesWrapper/AdvantagesWrapper';
import { Title } from '../../components/Title/Title';
import { useTranslation } from 'react-i18next';
import { SectionHome } from '../../components/SectionHome/SectionHome';

export const Home = ({ isNight }) => {
    const { t, i18n } = useTranslation('common');

    return (
        <>
            <div className='header-wrapper'>
                <h1 className='header-title'>{t('home.header')}
                    <span>{t('home.header-a')}</span></h1>
                <img src={!isNight ? soldiersWhite : soldiersBlack} className='header-bcg' alt='' />
            </div>
            <div className={isNight ? 'content-wrapper-n' : 'content-wrapper'}>
                <section>
                    <Title isNight={isNight} title='Poznaj nas' />
                    <p className='about-us'>
                        <h4>{t('home.about')}</h4>
                        <Quote isNight={isNight} />
                        <h4>{t('home.about-1')}</h4>
                    </p>
                </section>
                <CTA isNight={isNight} text={t('home.cta-1')} />
                <Service isNight={isNight} />
            </div>
            <SectionHome isNight={isNight} title={t("home.thermovision")} text1='Rozwój cyfrowych technik przetwarzania obrazu oraz metod detekcji ciepła, spowodował skokową poprawę urządzeń termowizyjnych. Początkowo ograniczona przez konieczność stosowania skomplikowanych układów chłodzenia i wydajnych układów zasilania w energię elektryczną, dziś – już w  wersjach miniaturowych -znajduje zastosowania w wielu odległych nieraz dziedzinach.' text2='Obecnie dostępne urządzenia termowizyjne są niezastąpione do szybkiej detekcji celu. Wraz z rozwojem technologii następuje ich miniaturyzacja przy zachowaniu odpowiedniej rozdzielczości matrycy, jej czułości i zapotrzebowaniu na prąd. Zachęcamy do zapoznania się „w terenie” z jakością obrazu, wstępnie wybranego urządzenia z naszego sklepu. Wierzymy, że obecnie prowadzone prace w kierunku połączenia z techniką noktowizyjną i cyfrową pozwolą zaoferować w nieodległej przyszłości jeszcze lepsze rozwiązania.' textIMG='Zwykle do właściwego doboru urządzenia nie wystarczy prosta ocena jego deklarowanych parametrów technicznych. Często urządzenia zbudowane z tych samych matryc (przez różnych producentów) dają zupełnie inne wrażenia optyczne.  Jakość uzyskiwanego obrazu wynika nie tylko z prostych parametrów i jakości zastosowanych podzespołów, które możemy sprawdzić w DTR (obiektyw, matryca, wyświetlacz), ale też z czynników nieoczywistych jak np. zastosowanego oprogramowania.' reverse={false} />

            <AdvantagesWrapper isNight={isNight} />

            <SectionHome reverse={true} isNight={isNight} title={t("home.nightvision")} text1='Chęć i potrzeba widzenia po zmroku od zawsze inspirowała ludzi do poszukiwań nowych rozwiązań. Początkowo stosowane silne źródła światła widzialnego okazały się niewystarczające w zastosowaniach wymagających skrytego działania. W okresie II WŚ, wprowadzono do użycia pierwsze urządzenia umożliwiające widzenie nocne po zastosowaniu silnych emiterów światła niewidocznego dla ludzkiego oka.' textIMG='Początkowo duże, niewygodne (np. plecakowe) i wymagające dużej ilości energii elektrycznej (silne doświetlacze żarówkowe z filtrami IR) urządzenia, ewoluowały by obecnie osiągnąć kompaktowe (350gram) rozmiary, z czasem pracy na jednej baterii ponad 40h. Postęp techniczny w technice noktowizyjnej jest ogromny i dotyczy nie tylko samych wzmacniaczy światła, ale również elektroniki ich zasilającej, dostępnej jasnej optyki, lekkich materiałów konstrukcyjnych a także ergonomii oraz precyzji wykonania. Złożoność produktu powoduje, że większość osób ma duże problemy z oceną parametrów sprzętu i wyborem właściwego urządzenia do własnych zastosowań.' text2={'NextGen tworzą ludzie z pasją, którzy chętnie zrozumieją Twoje potrzeby, przeprowadzą Cię przez cały proces doboru urządzenia i zaproponują optymalne rozwiązanie cenowe. Wyjaśnimy różnice w parametrach technicznych i uczciwie opowiemy o zaletach i ograniczeniach z nich wynikających. Nie ma rozwiązań uniwersalnych, nadających się dla wszystkich, dlatego dbając o świadome decyzje naszych Klientów zachęcamy do testów porównawczych wybranych rozwiązań. Rozumiemy Wasze pasje i potrzeby. Nasze urządzenia są stosowane z powodzeniem przez myśliwych, wojskowych, policjantów, pracowników ochrony, strzelców sportowych, astrofotografów, oraz entuzjastów ASG.'} />
        </>

    );
};

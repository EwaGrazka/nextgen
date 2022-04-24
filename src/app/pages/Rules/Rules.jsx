import React from 'react';
import bcgSubpage from '../../../assets/bcg-white.jpg';
import bcgSubpageG from '../../../assets/bcg-green.jpg';
import { useTranslation } from 'react-i18next';
import './Rules.scss'

export const Rules = ({ isNight }) => {
    const { t, i18n } = useTranslation('common');

    return (
        <div className={isNight ? 'products-container-n' : 'products-container'}>
            <div className='subpage-header'>
                <img className='products-header-img' src={isNight ? bcgSubpageG : bcgSubpage} />
                <h1>Regulamin</h1>
            </div>
            <div className='rules-content'>
                <div className='paragraph'>
                    <span>§ 1</span>
                    Postanowienia wstępne
                </div>
                <p>1. Sklep internetowy NEXTGEN, dostępny pod adresem internetowym www.nnvs.pl i www.nextgennightvision.com prowadzony jest przez Printzilla Druk 3d Małgorzata Trznadel z siedzibą w 66-615 Łagów, Zaułek 1, NIP 5841274916</p>
                <p>2. Niniejszy Regulamin skierowany jest zarówno do Konsumentów, jak i do Przedsiębiorców korzystających ze Sklepu i określa zasady korzystania ze Sklepu internetowego oraz zasady i tryb zawierania Umów Sprzedaży z Klientem na odległość za pośrednictwem Sklepu.</p>
                <div className='paragraph'>
                    <span>§ 2</span>
                    Definicje
                </div>

                <p><span>1. Konsument </span>– osoba fizyczna zawierająca ze Sprzedawcą umowę w ramach Sklepu, której przedmiot nie jest związany bezpośrednio z jej działalnością gospodarczą lub zawodową.</p>
                <p><span>2. Sprzedawca </span>– osoba fizyczna prowadząca działalność gospodarczą pod firmą Printzilla Druk 3d Małgorzata Trznadel, wpisaną do Centralnej Ewidencji i Informacji o Działalności Gospodarczej (CEIDG) prowadzonej przez ministra właściwego ds. gospodarki, NIP 5841274916</p>
                <p><span>3. Klient  </span>– każdy podmiot dokonujący zakupów za pośrednictwem Sklepu.</p>
                <p><span>4. Przedsiębiorca –</span>osoba fizyczna, osoba prawna i jednostka organizacyjna niebędąca osobą prawną, której odrębna ustawa przyznaje zdolność prawną, wykonująca we własnym imieniu działalność gospodarczą, która korzysta ze Sklepu.</p>

                <p><span>5. Sklep – </span>sklep internetowy prowadzony przez Sprzedawcę pod adresem internetowym www.nnvs.pl i www.nextgennightvision.com</p>

                <p><span>6. Umowa zawarta na odległość</span> – umowa zawarta z Klientem w ramach zorganizowanego systemu zawierania umów na odległość (w ramach Sklepu), bez jednoczesnej fizycznej obecności stron, z wyłącznym wykorzystaniem jednego lub większej liczby środków porozumiewania się na odległość do chwili zawarcia umowy włącznie.</p>
                <p><span>7. Regulamin – </span>niniejszy regulamin Sklepu.</p>
                <p><span>8. Zamówienie – </span>oświadczenie woli Klienta składane za pomocą Formularza Zamówienia i zmierzające bezpośrednio do zawarcia Umowy Sprzedaży Produktu lub Produktów ze Sprzedawcą.</p>
                <p><span>9. Konto – </span>konto klienta w Sklepie, są w nim gromadzone są dane podane przez Klienta oraz informacje o złożonych przez niego Zamówieniach w Sklepie.</p>
                <p><span>10. Formularz rejestracji – </span>formularz dostępny w Sklepie, umożliwiający utworzenie Konta.
                </p>
                <p><span>11. Formularz zamówienia – </span>interaktywny formularz dostępny w Sklepie umożliwiający złożenie Zamówienia, w szczególności poprzez dodanie Produktów do Koszyka oraz określenie warunków Umowy Sprzedaży, w tym sposobu dostawy i płatności.</p>
                <p><span>12. Koszyk – </span>element oprogramowania Sklepu, w którym widoczne są wybrane przez Klienta Produkty do zakupu, a także istnieje możliwość ustalenia i modyfikacji danych Zamówienia, w szczególności ilości produktów.</p>
                <p><span>13. Produkt – </span>dostępna w Sklepie rzecz ruchoma/usługa będąca przedmiotem Umowy Sprzedaży między Klientem a Sprzedawcą.</p>
                <p><span>14. Umowa Sprzedaży – </span>
                    umowa sprzedaży Produktu zawierana albo zawarta między Klientem a Sprzedawcą za pośrednictwem Sklepu internetowego. Przez Umowę Sprzedaży rozumie się też – stosowanie do cech Produktu – umowę o świadczenie usług i umowę o dzieło.</p>
            </div>
        </div>
    );
};

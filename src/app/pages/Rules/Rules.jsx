import React from 'react';
// import bcgSubpage from '../../../assets/bcg-white.jpg';
// import bcgSubpageG from '../../../assets/bcg-green.jpg';
import './Rules.scss'

export const Rules = ({ isNight }) => {

    return (
        <div className={isNight ? 'products-container-n' : 'products-container'}>
            <div className='subpage-header'>
                {/* <img className='products-header-img' src={isNight ? bcgSubpageG : bcgSubpage} alt='background' /> */}
                <h1>Regulamin</h1>
            </div>
            <div className={isNight ? 'rules-content-n' : 'rules-content'}>
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
                <div className='paragraph'>
                    <span>§ 3</span>
                    Kontakt ze Sklepem
                </div>
                <p>1. Adres Sprzedawcy: <span>66-615 Łagów, Zaułek 1</span></p>
                <p>2. Adres e-mail Sprzedawcy: <span>info@nnvs.pl</span></p>
                <p>3. Numer rachunku bankowego Sprzedawcy dla płatności w PLN: <span>80 1950 0001 2006 0036 9265 0001</span></p>
                <p>4. Numer rachunku bankowego Sprzedawcy dla płatności w EURO: <span>96 1950 0001 2006 0036 9265 0004</span></p>
                <p>5. Klient może porozumiewać się ze Sprzedawcą za pomocą adresów email podanych w niniejszym paragrafie.</p>
                <div className='paragraph'>
                    <span>§ 4</span>
                    Wymagania techniczne
                </div>
                <p>Do korzystania ze Sklepu, w tym przeglądania asortymentu Sklepu oraz składania zamówień na Produkty, niezbędne są:</p>
                <p>1. urządzenie końcowe z dostępem do sieci Internet i przeglądarką internetową,</p>
                <p>2. aktywne konto poczty elektronicznej (e-mail),</p>
                <p>3. włączona obsługa plików cookies,</p>
                <div className='paragraph'>
                    <span>§ 5</span>
                    Informacje ogólne
                </div>
                <p>1. Sprzedawca w najszerszym dopuszczalnym przez prawo zakresie nie ponosi odpowiedzialności za zakłócenia w tym przerwy w funkcjonowaniu Sklepu spowodowane siłą wyższą, niedozwolonym działaniem osób trzecich lub niekompatybilnością Sklepu internetowego z infrastrukturą techniczną Klienta.</p>
                <p>2. Przeglądanie asortymentu Sklepu nie wymaga zakładania Konta. Składanie zamówień przez Klienta na Produkty znajdujące się w asortymencie Sklepu możliwe jest albo po założeniu Konta zgodnie z postanowieniami § 6 Regulaminu albo przez podanie niezbędnych danych osobowych i adresowych umożliwiających realizację Zamówienia bez zakładania Konta.</p>
                <p>Ceny podane w Sklepie są podane w polskich złotych lub w EURO i są cenami brutto (uwzględniają podatek VAT).</p>
                <p>Na końcową (ostateczną) kwotę do zapłaty przez Klienta składa się cena za Produkt oraz koszt dostawy (w tym opłaty za transport, dostarczenie i usługi pocztowe), o której Klient jest informowany na stronach Sklepu w trakcie składania Zamówienia, w tym także w chwili wyrażenia woli związania się Umową Sprzedaży.</p>
                <p>W przypadku Umowy obejmującej prenumeratę lub świadczenie usług na czas nieoznaczony końcową (ostateczną) ceną jest łączna cena obejmująca wszystkie płatności za okres rozliczeniowy.</p>
                <p>Gdy charakter przedmiotu Umowy nie pozwala, rozsądnie oceniając, na wcześniejsze obliczenie wysokości końcowej (ostatecznej) ceny, informacja o sposobie, w jaki cena będzie obliczana, a także o opłatach za transport, dostarczenie, usługi pocztowe oraz o innych kosztach, będzie podana w Sklepie w opisie Produktu.</p>
                <div className='paragraph'>
                    <span>§ 6</span>
                    Zakładanie konta w Sklepie
                </div>



            </div>
        </div>
    );
};

import React from 'react';
import bcgSubpage from '../../../assets/bcg-white.jpg';
import bcgSubpageG from '../../../assets/bcg-green.jpg';
import { useTranslation } from 'react-i18next';
import './Privacy.scss';
import { SubpageHeader } from '../../components/SubpageHeader/SubpageHeader';

export const Privacy = ({ isNight }) => {
    const { t, i18n } = useTranslation('common');

    return (
        <div className={isNight ? 'products-container-n' : 'products-container'}>
            <SubpageHeader isNight={isNight} text='Polityka prywatności' />
            <div className={isNight ? 'privacy-content-n' : 'privacy-content'}>
                <p>Zgodnie art. 13 ust. 1 i 2 Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z 27.04.2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych) (Dz.Urz. UE L 119, s. 1), zwanym dalej: RODO, informuję Panią/Pana, że:</p>
                <p className='p-highlight'>Administratorem Pani/Pana danych osobowych jest:</p>
                <p><span>Printzilla Druk 3d Małgorzata Trznadel</span>
                    W sprawie swoich danych osobowych może się Pan/Pani skontaktować się z Administratorem danych osobowych za pomocą:
                    poczty elektronicznej: info@nnvs.pl lub listu na adres siedziby: ul. Zaułek 1, 66-615 Łagów</p>
                <p className='p-highlight'>Na podstawie art. 6 ust. 1 RODO Pani/Pana dane osobowe (imię, nazwisko, firma, nr PESEL, nr identyfikacji podatkowe, np. NIP lub REGON, adres, adres e-mail, numer telefonu, nr rachunku bankowego, adres siedziby) przetwarzamy w celu:</p>
                <ul>
                    <li>zawarcia umowy i wykonania jej (do dnia upływu terminu przedawnienia)</li>
                    <li>wypełnienia obowiązku prawnego ciążącego na administratorze, wynikającego z przepisów podatkowych i rachunkowych (do dnia upływu terminu przedawnienia)</li>
                    <li>ustalenia, dochodzenia i egzekucji roszczeń oraz obrony przed roszczeniami w postępowaniu przed sądami i innymi organami państwowymi (do dnia upływu terminu przedawnienia)</li>
                    <li>analizy sprzedaży i statystyki (do dnia, w którym upływa 5 lat od dnia wykonania umowy)</li>
                </ul>
                <p className='p-highlight'>Odbiorcami Pani/Pana danych osobowych mogą być:</p>
                <ul>
                    <li>dostawcy systemów informatycznych,</li>
                    <li>dostawcy usług IT,</li>
                    <li>podmioty świadczące na rzecz Spółki usługi księgowe, badania jakości obsługi, dochodzenia należności, usługi prawne, analityczne,</li>
                    <li>operatorzy pocztowi i kurierzy,</li>
                    <li>operatorzy systemów płatności elektronicznych oraz banki w zakresie realizacji płatności,</li>
                    <li>organy uprawnione do otrzymania Pani/Pana danych osobowych na podstawie przepisów prawa.</li>
                </ul>
                <p className='p-highlight'>Podanie przez Pana/Panią danych osobowych takich jak:</p>
                <p>imię, nazwisko, firma, nr PESEL, nr identyfikacji podatkowej (np. NIP lub REGON), adres, adres e-mail, numer telefonu, nr rachunku bankowego, adres siedziby jest dobrowolne, jednakże niezbędne do zawarcia i wykonania umowy.</p>
                <p className='p-highlight'>Na podstawie RODO ma Pan/Pani prawo do:</p>
                <ul>
                    <li>żądania dostępu do swoich danych osobowych (art. 15 RODO),</li>
                    <li>żądania sprostowania swoich danych osobowych (art.16 RODO),</li>
                    <li>żądania usunięcia swoich danych osobowych, tzw. „prawo do bycia zapomnianym” (art. 17 RODO),</li>
                    <li>żądania ograniczenia przetwarzania danych osobowych (art. 18 RODO),</li>
                    <li>wniesienia sprzeciwu wobec przetwarzania danych osobowych (art. 21 RODO),</li>
                    <li>żądania przenoszenia danych osobowych (art. 20 RODO)</li>
                </ul>
                <p>Jeżeli sądzi Pani/Pan, że przetwarzanie Pani/Pana danych osobowych narusza RODO ma Pani/Pan prawo złożenia skargi do organu nadzorczego, w szczególności w państwie członkowskim swojego zwykłego pobytu, swojego miejsca pracy lub miejsca popełnienia domniemanego naruszenia. Obecnie organem nadzorczym jest GIODO, natomiast od dnia 25 maja 2018 r. pełnienie owej funkcji rozpocznie Prezes Urzędu Ochrony Danych Osobowych (PUODO).</p>
            </div>
        </div>
    );
};

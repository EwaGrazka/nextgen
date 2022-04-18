import React from 'react';
import { useTranslation } from 'react-i18next';
import bcgSubpage from '../../../assets/bcg-white.jpg';
import './FAQ.scss';


export const FAQ = () => {
    const { t, i18n } = useTranslation('common');

    return (
        <div className='faq-container'>
            < div className='subpage-header' >
                <img src={bcgSubpage} />
                <h1>FAQ</h1>
            </div >
            <div className='faq-content'>
                <h5>{t('faq.faq-1')}</h5>
                <p>{t('faq.answer-1')}</p>
                <h5>Jakie są rodzaje fosforów?</h5>
                <p>Fosfor biały- przetworniki wyposażone w biały ekran fosforowy generują obraz zbliżony do czarno-białego, z delikatną nieboską poświata. Taki obraz jest bardziej naturalny dla ludzkiego oka oraz zapewnia większy kontrast.</p>
                <br />
                <p>Fosfor zielony - przetworniki z zielonym ekranem fosforowym wytwarzają obraz czarno-zielony. Ludzkie oko rozróżnia najwięcej odcieni pośrednich zieleni, dzięki czemu widoczne jest więcej szczegółów.</p>
                <h5>{t('faq.faq-2')}</h5>
                <p>{t('faq.answer-2')}</p>
                <h5>{t('faq.faq-3')}</h5>
                <p>{t('faq.answer-3')}</p>
                <p><span className='bold'>{t('faq.answer-3-list.a-point-1')}</span><span>{t('faq.answer-3-list.a-point-1a')}</span></p>
                <p><span className='bold'>{t('faq.answer-3-list.a-point-2')}</span><span>{t('faq.answer-3-list.a-point-2a')}</span></p>
                <p><span className='bold'>{t('faq.answer-3-list.a-point-3')}</span><span>{t('faq.answer-3-list.a-point-3a')}</span></p>
                <p><span className='bold'>{t('faq.answer-3-list.a-point-4')}</span></p>
                <h5>{t('faq.faq-4')}</h5>
                <p>{t('faq.answer-4')}</p>
                <h5>{t('faq.faq-5')}</h5>
                <p>{t('faq.answer-5')}</p>
                <h5>Jakie są podstawowe parametry noktowizora?</h5>
                <p>Rozdzielczość - wyrażona jest w parach linii na milimetr (lp/mm). Jest to graniczna rozdzielczość jaką zapewnia przetwornik noktowizyjny, mierzona w środkowym obszarze. Co do zasady im większa rozdzielczość tym łatwiej dostrzec szczegóły obiektów w polu widzenia.</p>
                <br />
                <p>Czułość fotokatody - Jest to miara zdolności tuby do konwersji światła szczątkowego na sygnał elektryczny. Im więcej fotonów jest konwertowanych na elektrony, tym lepiej MCP jest w stanie wzmocnić sygnał uzyskując jaśniejszy i bardziej wyraźny obraz.
                </p>
                <br />
                <p>FOM (Figure of Merit) - ogólny wskaźnik jakości przetwornika, obliczany jest poprzez iloczyn rozdzielczości wrażonej w lp/mm i stosunku sygnału do szumu. FOM=lp/mm * SNR</p>
                <br />
                <p>HALO - wartość ta określa wielkość poświaty otaczającej jasne punkty w obrazie noktowizyjnym.</p>
                <br />
                <p>FOV - określa pole widzenia, wyrażone w stopniach. Wartość ta odpowiada kątowi widzenia urządzenia.
                </p>
                <br />
                <p>Stosunek sygnału do szumów (SNR, S/N) - wartość ta jest miarą ilości światła docierającego do oka obserwatora zmierzonego w stosunku do szumu generowanego przez wzmacniacz obrazu. Im wyższa wartość SNR tym mniejsza ilość szumów w obrazie, co ma bardzo duże znaczenie, przy użytkowaniu urządzeń szczególnie w warunkach szczątkowego oświetlenia. Wzmocnienie @ 2.10-5 lx</p>
                <br />
                <p>Rozdzielczość w środku – to to samo co rozdzielczość</p>
                <br />
                <p>Rozdzielczość @ 200 lux – to samo co rozdzielczość tylko w warunkach jasnego oświetlenia.</p>
                <br />
                <p>EBI - jest to ilość światła, która jest generowana przez przetwornik gdy nie ma żadnego oświetlenia fotokatody. Poziom EBI określa najniższy poziom oświetlenia, przy którym można zaobserwować obiekt na ekranie przetwornika.</p>
            </div>
        </div >
    );
};

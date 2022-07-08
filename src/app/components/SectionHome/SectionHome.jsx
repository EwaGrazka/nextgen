import React from 'react';
import './SectionHome.scss';
import { Title } from '../Title/Title';
import { TextSection } from '../TextSection/TextSection';
import { useTranslation } from 'react-i18next';

export const SectionHome = ({ section, isNight, title }) => {

    const { t } = useTranslation('common');


    return (
        <>
            {section === 'thermovision' &&
                <section
                    className={isNight ? 'nightvision green' : 'nightvision blue'}>
                    <Title isNight={isNight} title={title} />
                    <TextSection
                        title1={t('home.thermovisionText-a-bold')}
                        text1={t('home.thermovisionText-a')}
                        title2={t('home.thermovisionText-b-bold')}
                        text2={t('home.thermovisionText-b')} />
                </section>
            }
            {section === 'nightvision' &&
                <section style={{ paddingBottom: '50px' }} className={isNight ? 'nightvision green' : 'nightvision blue'}>
                    <Title isNight={isNight} title={title} />
                    <TextSection title1={t('home.nightvisionText-a-bold')}
                        text1={t('home.nightvisionText-a')}
                        title2={t('home.nightvisionText-b-bold')}
                        text2={t('home.nightvisionText-b')} />
                </section>
            }
        </>
    );
};
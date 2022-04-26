import React from 'react';
import { useTranslation } from 'react-i18next';
import bcgSubpage from '../../../assets/bcg-white.jpg';
import bcgSubpageG from '../../../assets/bcg-green.jpg';
import { Title } from '../../components/Title/Title';


import './FAQ.scss';
import { SubpageHeader } from '../../components/SubpageHeader/SubpageHeader';


export const FAQ = ({ isNight }) => {
    const { t, i18n } = useTranslation('common');

    return (
        <div className={isNight ? 'faq-container-n' : 'faq-container'}>
            <SubpageHeader isNight={isNight} text='FAQ' />

            <div className='faq-content'>
                <Title isNight={isNight} title={t('faq.faq-1')} />
                <p>{t('faq.answer-1')}</p>
                <Title isNight={isNight} title={t('faq.faq-1a')} />
                <p>{t('faq.answer-1a-a')}</p>
                <br />
                <p>{t('faq.answer-1a-b')}</p>
                <Title isNight={isNight} title={t('faq.faq-2')} />
                <p>{t('faq.answer-2')}</p>
                <Title isNight={isNight} title={t('faq.faq-3')} />
                <p>{t('faq.answer-3')}</p>
                <p><span className='bold'>{t('faq.answer-3-list.a-point-1')}</span><span>{t('faq.answer-3-list.a-point-1a')}</span></p>
                <p><span className='bold'>{t('faq.answer-3-list.a-point-2')}</span><span>{t('faq.answer-3-list.a-point-2a')}</span></p>
                <p><span className='bold'>{t('faq.answer-3-list.a-point-3')}</span><span>{t('faq.answer-3-list.a-point-3a')}</span></p>
                <p><span className='bold'>{t('faq.answer-3-list.a-point-4')}</span></p>
                <Title isNight={isNight} title={t('faq.faq-4')} />
                <p>{t('faq.answer-4')}</p>
                <Title isNight={isNight} title={t('faq.faq-5')} />
                <p>{t('faq.answer-5')}</p>
                <Title isNight={isNight} title={t('faq.faq-6')} />
                <p>{t('faq.answer-6a')}</p>
                <br />
                <p>{t('faq.answer-6b')}</p>
                <br />
                <p>{t('faq.answer-6c')}</p>
                <br />
                <p>{t('faq.answer-6d')}</p>
                <br />
                <p>{t('faq.answer-6e')}</p>
                <br />
                <p>{t('faq.answer-6f')}</p>
                <br />
                <p>{t('faq.answer-6g')}</p>
                <br />
                <p>{t('faq.answer-6h')}</p>
                <br />
                <p>{t('faq.answer-6i')}</p>
            </div>
        </div >
    );
};

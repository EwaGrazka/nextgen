import React from 'react';
import { useTranslation } from 'react-i18next';

export const FAQ = () => {
    const { t, i18n } = useTranslation('common');

    return (
        <div className='subpage-container'>
            <h5>{t('faq.faq-1')}</h5>
            <p>{t('faq.answer-1')}</p>
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
        </div>
    );
};

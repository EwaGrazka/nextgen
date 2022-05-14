import React from 'react';
import './SectionHome.scss';
import { Title } from '../Title/Title';
import imgW from '../../../assets/img-white.png'
import imgW1 from '../../../assets/img-white-1.png'
import imgB from '../../../assets/img-black.png'
import imgB1 from '../../../assets/img-black-1.png'

export const SectionHome = ({ isNight, title, text1, reverse, textIMG, text2 }) => {

    return (
        <section className={isNight ? 'nightvision-n' : 'nightvision'}>
            <Title isNight={isNight} title={title} />
            <p>{text1}</p>
            <div className='section-img-text'>
                {!reverse && <img src={isNight ? imgB : imgW} alt='night vision' />}

                <p
                    className='img-text'
                    style={!reverse ? { marginLeft: '50px' } : { marginRight: '50px' }}>
                    {textIMG}
                </p>
                {reverse && <img src={isNight ? imgB1 : imgW1} alt='night vision' />}
            </div>

            <p>
                {text2}
            </p>
        </section>
    );
};
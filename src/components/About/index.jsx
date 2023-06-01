import React from 'react';

import './About.css'
import Foto from '../../img/sobre.png'

import { AiOutlineCloudDownload } from 'react-icons/ai'

const About = () => {
    return (
        <section className="about section" id="sobre">
            <h2 className="section__title">Sobre</h2>
            <span className="section__subtitle">Introdução</span>
            <div className="about__container container grid">
                <img src={Foto} alt="homem de terno azul com sorriso no rosto" className="about__img" />

                <div className="about__data">
                    <p className="about__description">
                        Conhecimento sólido sobre desenvolvimento de interfaces com as tecnologias HTML, CSS, Javascript e React.
                    </p>

                    <div className="about__info">
                        <div>
                            <span className="about__info-title">07+</span>
                            <span className="about__info-name">Meses <br /> Experiência </span>
                        </div>
                        <div>
                            <span className="about__info-title">02+</span>
                            <span className="about__info-name">Projetos <br />Completos</span>
                        </div>
                        <div>
                            <span className="about__info-title">0</span>
                            <span className="about__info-name">Empresas<br /> Trabalhadas </span>
                        </div>
                    </div>

                    <div className="about__buttons">
                        <a download='' href="assets/pdf/Alexa-Cv.pdf" className="button button--flex">
                            Baixar CV <AiOutlineCloudDownload className='button__icon' />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

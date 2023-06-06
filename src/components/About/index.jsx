import React from 'react';

import './About.css'
import Foto from '../../img/sobre.png'
import Curriculo from '../../img/CvJosafa.pdf'

import { AiOutlineCloudDownload } from 'react-icons/ai'

const About = () => {
    return (
        <section className="about section" id="sobre">
            <h2 className="section__title">Sobre mim</h2>
            <span className="section__subtitle">Introdução</span>
            <div className="about__container container grid">
                <img src={Foto} alt="homem de terno azul com sorriso no rosto" className="about__img" />

                <div className="about__data">
                    <p className="about__description">
                        Sólido conhecimento em desenvolvimento frontend com as tecnologias HTML5, CSS3, Javascript, JSX e React.
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
                            <span className="about__info-title">1</span>
                            <span className="about__info-name">Empresas<br /> Trabalhadas </span>
                        </div>
                    </div>

                    <div className="about__buttons">
                        <a download='' href={Curriculo} className="button button--flex">
                            Baixar CV <AiOutlineCloudDownload className='button__icon' />
                        </a>
                    </div>
                </div>
            </div>
            <div className='space'></div>
        </section>
    );
};

export default About;

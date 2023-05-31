import React from 'react';
import './Qualification.css'

/* icons react */
import { TbSchool } from 'react-icons/tb';
import { CgWorkAlt } from 'react-icons/cg';
import { LuCalendarDays } from 'react-icons/lu';

/* functions */
import activateTab from '../../assets/tabsQualification.js';
const Qualification = () => {
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualificação</h2>
            <span className="section__subtitle">Qualificações e cursos</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div onClick={activateTab} className="qualification__button button--flex qualification__active" data-target="#education">
                        <TbSchool className='qualification__icon' />
                        Educação
                    </div>

                    <div onClick={activateTab} className="qualification__button button--flex" data-target="#work">
                        <CgWorkAlt className='qualification__icon' />
                        Experiência
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className="qualification__content qualification__active" data-content id='education'>
                        <div className="qualification__data">
                            {/* Faculdade */}
                            <div>
                                <h3 className="qualification__title">Análise e Desenvolvimento de Sistemas</h3>
                                <span className="qualification__subtitle"> VINCIT - Brasil</span>
                                <div className="qualification__calendar">
                                    <LuCalendarDays className='qualification__icon' />
                                    2022 - 2025
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Desenvolvedor Frontend</h3>
                                <span className="qualification__subtitle">Alura - Brasil</span>
                                <div className="qualification__calendar">
                                    <LuCalendarDays className='qualification__icon' />
                                    2022 - 2023
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Cybersecurity</h3>
                                <span className="qualification__subtitle">FIAP - Brasil</span>
                                <div className="qualification__calendar">
                                    <LuCalendarDays className='qualification__icon' />
                                    2021 - 2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Linux Fundamentos</h3>
                                <span className="qualification__subtitle">FIAP - Brasil</span>
                                <div className="qualification__calendar">
                                    <LuCalendarDays className='qualification__icon' />
                                    2021 - 2023
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Introduction to Cybersecurity Tools & Cyber Attacks</h3>
                                <span className="qualification__subtitle">IBM - Estados Unidos</span>
                                <div className="qualification__calendar">
                                    <LuCalendarDays className='qualification__icon' />
                                    2021 - 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div></div>
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                            </div>
                        </div>
                    </div>




                    {/* Experiências */}
                    <div className="qualification__content" data-content id='work'>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Auxiliar de produção</h3>
                                <span className="qualification__subtitle">Gráfica Peixoto</span>
                                <div className="qualification__calendar">
                                    <i className="fa-regular fa-calendar"></i>
                                    2019 - 2021
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Estudante Formação Frontend</h3>
                                <span className="qualification__subtitle">Alura - Brasil</span>
                                <div className="qualification__calendar">
                                    <i className="fa-regular fa-calendar"></i>
                                    2022 - 2023
                                </div>
                            </div>
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Qualification;

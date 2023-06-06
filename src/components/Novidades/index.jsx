import React from 'react';
import './Novidades.css'

import setupModal from '../../assets/services.js'

import { HiCode, HiOutlineServer } from 'react-icons/hi'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md'
import { AiOutlineCheckCircle } from 'react-icons/ai'


const Aprimorando = () => {
    return (
        <div className="services section">
            {/*  <h2 className="section__title">Aprimorando</h2> */}
            <span className="section__subtitle">O que tenho práticado no momento</span>
            < div className="services__container container grid" >
                {/* <!--==================== SERVICES 1 ====================--> */}
                < div onClick={setupModal} className="services__content" >
                    <div>
                        <HiCode className='services__icon' />
                        <h3 className="services__title">Frontend</h3>
                    </div>

                    <span className="button button--flex button--small button--link services__button">
                        Ver mais
                        <HiOutlineArrowNarrowRight className='button__icon' />
                    </span>

                    <div className="services__modal">
                        <div className="services__modal-content">
                            <h4 className="services__modal-title"> Frontend</h4>
                            <MdOutlineClose className='services__modal-close' />

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <AiOutlineCheckCircle className='services__modal-icon' />
                                    <p>Estilizando com tailwindcss</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div >

                {/* <!--==================== SERVICES 2 ====================--> */}
                < div onClick={setupModal} className="services__content" >
                    <div>
                        <HiOutlineServer className='services__icon' />
                        <h3 className="services__title">Backend</h3>
                    </div>

                    <span className="button  button--link services__button">
                        Ver mais
                        <HiOutlineArrowNarrowRight className='button__icon' />
                    </span>

                    <div className="services__modal">
                        <div className="services__modal-content">
                            <h4 className="services__modal-title">Backend</h4>
                            <MdOutlineClose className='services__modal-close' />


                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <AiOutlineCheckCircle className='services__modal-icon' />
                                    <p> Introdução ao python</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div >
            </div >
        </div>
    )
}

export default Aprimorando
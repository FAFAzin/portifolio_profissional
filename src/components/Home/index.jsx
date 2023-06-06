import React from 'react';
import image from '../../img/perfil.png'
import './Home.css';

/* Icons react */
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { AiOutlineArrowDown } from 'react-icons/ai'
import { TbSend } from 'react-icons/tb'

/* React Router Dom */
import { Link } from 'react-router-dom';

const Home = () => {

    /* Função para acionar o direcionamento do cliente para o email */
    const handleButtonClick = () => {
        const emailAddress = 'josafajosina@gmail.com';
        const subject = 'Olá vim pelo seu site';
        const body = 'Insira sua mensagem';

        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
    };




    /* Retorno a partir daqui */
    return (
        <section className="home section" id="inicio">
            <div className="home__container container grid">

                {/* Icones rede social */}
                <div className="home__content grid">
                    <div className="home__social">
                        <Link to="https://www.linkedin.com/in/josafa-josina-silveira-dev" target="_blank" className="home__social-icon">
                            <FiLinkedin />
                        </Link>
                        <Link to="https://www.instagram.com/josafa_silveira/?next=%2F" target="_blank" className="home__social-icon">

                            <FiInstagram />
                        </Link>
                        <Link to="https://github.com/FAFAzin" target="_blank" className="home__social-icon">
                            <FiGithub />
                        </Link>
                    </div>

                    {/* Svg image */}
                    <div className="home__img">
                        <svg className='home__blob' viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink">
                            <mask id="mask0" mask-type="alpha">
                                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                            </mask>
                            <g mask="url(#mask0)">
                                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                                <image className="home__blob-img" x="-120" y="-20" xlinkHref={image} />
                            </g>
                        </svg>

                    </div>


                    {/* Name and Information */}
                    <div className="home__data">
                        <h1 className="home__title">Olá, Eu sou Josafá</h1>
                        <h3 className="home__subtitle">Desenvolvedor Frontend Jr</h3>
                        <p className="home__description">Experiência com desenvolvimento de software focado em frontend.</p>
                        <Link onClick={handleButtonClick} to="/contato" className="button button--flex">
                            Contate me <TbSend className='button__icon' />
                        </Link>
                    </div>
                    {/* Scroll small */}
                </div>
            </div>
            <div className="home__scroll">
                <a href="#sobre" className="home__scroll-button button--flex">
                    <span className="home__scroll-name"> Role para baixo </span>
                    <AiOutlineArrowDown className='home__scroll-arrow' />
                </a>
            </div>
        </section >
    )
}

export default Home
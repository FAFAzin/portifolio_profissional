import React from 'react';
import './Home.css';
import ImageProfile from '../../assets/img/perfil.png'

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">

                {/* Icones rede social */}
                <div className="home__content grid">
                    <div className="home__social">
                        <a href="https://linkedin.com" target="_blank" className="home__social-icon">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" className="home__social-icon">
                            <i className="fa-brands fa-square-instagram"></i>
                        </a>
                        <a href="https://github.com" target="_blank" className="home__social-icon">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>

                    {/* Svg image */}
                    <div class="home__img">
                        <svg class='home__blob' viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
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
                                <image class="home__blob-img" x="12" y="18" href={ImageProfile} />
                            </g>
                        </svg>
                    </div>
                    {/* Name and Information */}
                    <div className="home__data">
                        <h1 className="home__title">Hi, I´am Alexa</h1>
                        <h3 className="home__subtitle">Frontend Developer</h3>
                        <p className="home__description">High level experience in web design and knowlede, producing quality
                            work.</p>
                        <a href="#contact" className="button button--flex">
                            Contact Me <i className="fa-regular fa-paper-plane button__icon"></i>
                        </a>
                    </div>
                </div>

                {/* Scroll small */}
                <div className="home__scroll">
                    <a href="#about" className="home__scroll-button button--flex">
                        <span className="home__scroll-name"> Scroll down </span>
                        <i className="fa-solid fa-arrow-down-long home__scroll-arrow"></i>

                    </a>
                </div>
            </div>
        </section >
    )
}

export default Home
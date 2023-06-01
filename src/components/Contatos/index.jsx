import React from 'react';

import './Contato.css';

import { HiOutlineMail } from 'react-icons/hi';
import { GoLocation } from 'react-icons/go';

const Contato = () => {
    return (
        <section className="contact section" id="contato">
            <h2 className="section__title">Contate me</h2>
            <span className="section__subtitle">Contato por email</span>

            <div className="contact__container container grid">
                <div>
                    <div className="contact__information">
                        <HiOutlineMail className=' contact__icon' />

                        <div>
                            <h3 className="contact__title">Email</h3>
                            <span className="contact__subtitle">josafajosina@gmail.com</span>
                        </div>
                    </div>
                    <div className="contact__information">
                        <GoLocation className='contact__icon' />
                        <div>
                            <h3 className="contact__title">Location</h3>
                            <span className="contact__subtitle">Brasil - Rio de Janeiro - RJ</span>
                        </div>
                    </div>
                </div>
                {/* Ativar em breve */}
                {/* <form action="" className="contact__form grid">
                    <div className="contact__inputs grid">
                        <div className="contact__content">
                            <label htmlFor="" className="contact__label">Name: </label>
                            <input type="text" className="contact__input" />
                        </div>
                        <div className="contact__content">
                            <label htmlFor="" className="contact__label">Email: </label>
                            <input type="email" className="contact__input" />
                        </div>
                    </div>
                    <div className="contact__content">
                        <label htmlFor="" className="contact__label">Project</label>
                        <input type="text" className="contact__input" />
                    </div>
                    <div className="contact__content">
                        <label htmlFor="" className="contact__label">Message</label>
                        <textarea name="" id="" cols="30" rows="10" className="contact__input"></textarea>
                    </div>
                    <div>
                        <a href="#" className="button button--flex">
                            Send Message
                            <i className="fa-solid fa-paper-plane button__icon"></i>
                        </a>
                    </div>
                </form> */}
            </div>
        </section>
    );
};

export default Contato;

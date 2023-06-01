import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__bg">
                <div className="footer__container container grid">
                    {/* <div>
                        <h1 className="footer__title">Josafá</h1>
                        <span className="footer__subtitle">Frontend developer jr</span>
                    </div> */}
                </div>

                <p className="footer__copy">&#169; Josafá J. Silveira. Todos os direitos reservados</p>
            </div>
        </footer>
    );
};

export default Footer;

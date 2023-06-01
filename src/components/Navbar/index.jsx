import React, { useState } from 'react';
import './Navbar.css';

import ActiveMenu from '../../assets/ActiveMenu.js';

/* React Icons */
import { BiHome, BiUser, BiFileBlank, BiGridAlt } from 'react-icons/bi';
import { MdOutlineInsertPhoto } from 'react-icons/md';
import { TbSend, TbSchool } from 'react-icons/tb';
import { GrFormClose } from 'react-icons/gr';

const Navbar = () => {
    const [navMenuVisible, setNavMenuVisible] = useState(false);

    /* ===== Show and Hidden Menu */
    const toggleNavMenu = () => {
        setNavMenuVisible(!navMenuVisible);
    };

    const closeNavMenu = () => {
        setNavMenuVisible(false);
    };

    const handleLinkClick = () => {
        setNavMenuVisible(false);
    };

    /* Criar função para marcar o icone selecionado */

    return (
        <header className='header' id='header'>
            <nav className='nav container'>
                <a href="#inicio" className='nav__logo'>Josafá</a>

                <div onClick={handleLinkClick} className={navMenuVisible ? 'nav__menu show-menu' : 'nav__menu'} id='nav-menu'>

                    <ul className='nav__list grid'>

                        {/* Home icon */}
                        <li className='nav__item'>
                            <a href='#inicio' onClick={ActiveMenu} className='nav__link active-link'>
                                <BiHome className='nav__icon' /> Início
                            </a>
                        </li>

                        {/* About Icon */}
                        <li className='nav__item'>
                            <a href="#sobre" onClick={ActiveMenu} className='nav__link'>
                                <BiUser className='nav__icon' /> Sobre
                            </a>
                        </li>

                        {/* Skills Icon */}
                        < li className='nav__item'>
                            <a href="#skills" onClick={ActiveMenu} className='nav__link'>
                                <BiFileBlank className='nav__icon' /> Skills
                            </a>
                        </li>

                        {/* Services Icon */}
                        <li className='nav__item'>
                            <a href="#qualification" onClick={ActiveMenu} className='nav__link'>
                                <TbSchool className='nav__icon' /> Qualificação
                            </a>
                        </li>

                        {/* Portifólio Icon */}
                        <li className='nav__item'>
                            <a href="#portifolio" onClick={ActiveMenu} className='nav__link'>
                                <MdOutlineInsertPhoto className='nav__icon' /> Portifólio
                            </a>
                        </li>

                        {/* Contact Icon */}
                        <li className='nav__item'>
                            <a href="#contato" onClick={ActiveMenu} className='nav__link'>
                                <TbSend className='nav__icon' /> Contato
                            </a>
                        </li>


                    </ul>


                    {/* Icon buttom hidden menu */}
                    <GrFormClose onClick={closeNavMenu} className='nav__close' id='nav-close' />
                </div>

                <div className="nav__btns">

                    {/* icon button menu show */}
                    <div>
                        <BiGridAlt onClick={toggleNavMenu} className="nav__toggle" id="nav-toggle" />
                    </div>
                </div>

            </nav>

        </header >
    )

};

export default Navbar;

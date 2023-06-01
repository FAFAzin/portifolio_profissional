import React, { useEffect } from 'react';

const Menu = () => {
    useEffect(() => {
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');
        const navClose = document.getElementById('nav-close');
        const navLinks = document.querySelectorAll('.nav__link');

        const showMenu = () => {
            navMenu.classList.add('show-menu');
        };

        const hideMenu = () => {
            navMenu.classList.remove('show-menu');
        };

        const linkAction = () => {
            hideMenu();
        };

        if (navToggle) {
            navToggle.addEventListener('click', showMenu);
        }

        if (navClose) {
            navClose.addEventListener('click', hideMenu);
        }

        navLinks.forEach((navLink) => {
            navLink.addEventListener('click', linkAction);
        });

        return () => {
            if (navToggle) {
                navToggle.removeEventListener('click', showMenu);
            }

            if (navClose) {
                navClose.removeEventListener('click', hideMenu);
            }

            navLinks.forEach((navLink) => {
                navLink.removeEventListener('click', linkAction);
            });
        };
    }, []);
};

export default Menu;

import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../Home'
import About from '../About'
import Skills from '../Skills'
import Qualification from '../Qualification'
import Portifolio from '../Portifolio'
import Contato from '../Contatos'


const Main = () => {
    return (
        <main>
            <section>
                <Home />
            </section>
            <section>
                <About />
            </section>
            <section>
                <Skills />
            </section>
            <section>
                <Qualification />
            </section>
            <section>
                <Portifolio />
            </section>
            <section>
                <Contato />
            </section>
        </main>

    )
}

export default Main
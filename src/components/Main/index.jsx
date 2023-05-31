import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../Home'
import About from '../About'
import Skills from '../Skills'

const Main = () => {
    return (
        <main>
            <div>
                <Home />
            </div>
            <div>
                <About />
            </div>
            <div>
                <Skills />
            </div>
        </main>

    )
}

export default Main
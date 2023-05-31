import './Skills.css'
import tabSkills from '../../assets/tabsSkills.js'

/* Icons react */
import { HiCode, HiOutlineServer } from 'react-icons/hi'
import { BsChevronCompactDown } from 'react-icons/bs';


const Skills = () => {

    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">Conhecimento técnico</span>

            <div className="skills__container container grid">
                {/* SKILLS 1 */}
                <div>
                    <div onClick={tabSkills} className="skills__content skills-open">
                        <div className="skills__header">
                            <HiCode className='skills__icon' />
                            <div>
                                <h1 onClick={tabSkills} className="skills__title">Desenvolvimento Frontend</h1>
                                <span className="skills__subtitle">+07 meses</span>
                            </div>
                            <BsChevronCompactDown className='skills__arrow' />
                        </div>

                        {/* Lista de Skills */}
                        <div className="skills__list grid">
                            {/* HTML */}
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">HTML</h3>
                                    <span className="skills__number">70%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__html"></span>
                                </div>
                            </div>
                            {/* CSS */}
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">CSS</h3>
                                    <span className="skills__number">60%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__css"></span>
                                </div>
                            </div>
                            {/* Javascript */}
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Javascript</h3>
                                    <span className="skills__number">70%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__javascript"></span>
                                </div>
                            </div>
                            {/* React */}
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">React</h3>
                                    <span className="skills__number">50%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__react"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div onClick={tabSkills} className="skills__content skills-close">
                        <div className="skills__header">
                            <HiOutlineServer className='skills__icon' />
                            <div>
                                <h1 className="skills__title">Desenvolvimento Backend</h1>
                                <span className="skills__subtitle">+02 meses</span>
                            </div>
                            <BsChevronCompactDown className='skills__arrow' />
                        </div>

                        {/* Lista de Skills */}
                        <div className="skills__list grid">
                            {/* HTML */}
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Python</h3>
                                    <span className="skills__number">10%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__python"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Skills;

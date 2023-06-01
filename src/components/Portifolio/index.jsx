// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Portifolio.css';



/* imports images */
import Image1 from '../../img/portfolio1.jpg'
import image2 from '../../img/portfolio2.jpg'

/* icons react */
import { BsArrowRightShort } from 'react-icons/bs';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'


const Portifolio = () => {
    return (
        <section className="portfolio section" id="portifolio">
            <h2 className="section__title">Portifólio</h2>
            <span className="section__subtitle">Meus projetos recentes</span>
            <div className="portifolio__container container swiper-container">
                <div className="swiper-wrapper">
                    <Swiper

                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        pagination={{
                            el: '.swiper-pagination',
                            clickable: true
                        }}
                    >
                        <SwiperSlide>
                            <div className="portifolio__content grid">
                                <img src={Image1} alt="" className="portifolio__img" />

                                <div className="portifolio__data">
                                    <h3 className="portifolio__title">Organo project</h3>
                                    <p className="portifolio__description">
                                        Site responsivo e moderno. A Organo facilita a organização da sua empresa.
                                    </p>

                                    <a href="" className="button button--flex button--small portifolio__button">
                                        Demo
                                        <BsArrowRightShort className='button__icon' />
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="portifolio__content grid">
                                <img src={image2} alt="" className="portifolio__img" />

                                <div className="portifolio__data">
                                    <h3 className="portifolio__title">Smart Bank project</h3>
                                    <p className="portifolio__description">
                                        Uma interface moderna e limpa. O essencial para um banco smart.
                                    </p>

                                    <a href="" className="button button--flex button--small portifolio__button">
                                        Demo
                                        <BsArrowRightShort className='button__icon' />
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="swiper-button-next">
                        <GrFormNext className='swiper-portifolio-icon' />
                    </div> 
                    <div className="swiper-button-prev">
                        <GrFormPrevious className='swiper-portifolio-icon' />
                    </div>

                    {/* add pagination */}
                    <div className="swiper-pagination"></div>
                </div>

            </div>


        </section >

    )
}

export default Portifolio

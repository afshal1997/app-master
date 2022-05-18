import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import user from '../../../Assets/TestimonialSlider/user.png'
import brand01 from '../../../Assets/BrandIcons/brand01.png'
import brand02 from '../../../Assets/BrandIcons/brand02.png'
import brand03 from '../../../Assets/BrandIcons/brand03.png'
import brand04 from '../../../Assets/BrandIcons/brand04.png'
import Slider from 'react-slick/lib/slider'

const Testimonial = () => {
    var settings = {
        dots: true,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div id="section06">
                <h1 className="text-center headingText mt-5 pt-5">
                    Testimonials
                </h1>
                <Container>
                    <div className="py-5">
                        <Col lg={7} className="testiDetail text-center m-auto">
                            <Slider {...settings}>
                                <div>
                                    <div className="testiDetail">
                                        <img src={user} alt="user" />
                                        <h6 className="my-2"><b>Paul Rosa</b></h6>
                                        <p className='text-muted'>
                                            Co-Founder at GameForm
                                        </p>
                                        <div className="rating">
                                            <FontAwesomeIcon className='text-warning' icon={faStar} />
                                            <FontAwesomeIcon className='text-warning' icon={faStar} />
                                            <FontAwesomeIcon className='text-warning' icon={faStar} />
                                            <FontAwesomeIcon className='text-warning' icon={faStarHalfAlt} />
                                        </div>
                                        <p className="text-muted p-3">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="testiDetail">
                                        <img src={user} alt="user" />
                                        <h6 className="my-2"><b>Paul Rosa</b></h6>
                                        <p className='text-muted'>
                                            Co-Founder at GameForm
                                        </p>
                                        <div className="rating">
                                            <FontAwesomeIcon className='text-warning' icon={faStar} />
                                            <FontAwesomeIcon className='text-warning' icon={faStar} />
                                            <FontAwesomeIcon className='text-warning' icon={faStar} />
                                            <FontAwesomeIcon className='text-warning' icon={faStarHalfAlt} />
                                        </div>
                                        <p className="text-muted p-3">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="testiDetail">
                                        <img src={user} alt="user" />
                                        <h6 className="my-2"><b>Paul Rosa</b></h6>
                                        <p className='text-muted'>
                                            Co-Founder at GameForm
                                        </p>
                                        <div className="rating">
                                            <FontAwesomeIcon className='text-warning' icon={faStar} />
                                            <FontAwesomeIcon className='text-warning' icon={faStar} />
                                            <FontAwesomeIcon className='text-warning' icon={faStar} />
                                            <FontAwesomeIcon className='text-warning' icon={faStarHalfAlt} />
                                        </div>
                                        <p className="text-muted p-3">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </div>
                                </div>
                            </Slider>
                        </Col>
                    </div>
                </Container>
            </div>
            <Container>
                <div className="customerBox mb-5">
                    <Row className="row">
                        <Col lg={3} data-aos="fade-right">
                            <img src={brand01} alt="brand01"></img>
                        </Col>

                        <Col lg={3} data-aos="fade-right">
                            <img src={brand02} alt="brand02"></img>
                        </Col>

                        <Col lg={3} data-aos="fade-left">
                            <img src={brand03} alt="brand03"></img>
                        </Col>

                        <Col lg={3} data-aos="fade-left">
                            <img src={brand04} alt="brand04"></img>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default Testimonial
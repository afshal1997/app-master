import React from 'react'
import { Col, Container } from 'react-bootstrap';
import Slider from 'react-slick/lib/slider';
import slideImg01 from '../../../Assets/MostPopularVideosSlider/slideImg01.jpg'
import slideImg02 from '../../../Assets/MostPopularVideosSlider/slideImg02.jpg'
import slideImg03 from '../../../Assets/MostPopularVideosSlider/slideImg03.jpg'

const VideosSlider = () => {
    var settings = {
        className: "mainVideoSliderClass",
        autoplay: true,
        autoplaySpeed: 2500,
        dots: true,
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
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
        <div className='MostPopularVideosSlider'>
            <Container>
                <Col lg={4} className='m-auto text-center'>
                    <h6 className="text-center text-muted">
                        <b>Popular Videos</b>
                    </h6>
                    <h1 className="headingText mb-5 text-center">
                        Our Most Popular Videos
                    </h1>
                </Col>
                <Col lg={9} className="text-center mt-5 m-auto">
                    <Slider {...settings}>
                        <div>
                            <img className='sliderVideo' src={slideImg01} alt="slideImg01" />
                        </div>
                        <div>
                            <img className='sliderVideo' src={slideImg02} alt="slideImg02" />
                        </div>
                        <div>
                            <img className='sliderVideo' src={slideImg03} alt="slideImg03" />
                        </div>
                        <div>
                            <img className='sliderVideo' src={slideImg02} alt="slideImg02" />
                        </div>
                    </Slider>
                </Col>
            </Container>
        </div>
    )
}

export default VideosSlider
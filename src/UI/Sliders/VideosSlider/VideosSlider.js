import React from 'react'
import { Col, Container } from 'react-bootstrap';
import Slider from 'react-slick/lib/slider';

const VideosSlider = () => {
    var settings = {
        className: "mainVideoSliderClass",
        autoplay: true,
        autoplaySpeed: 3500,
        dots: true,
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        speed: 2000,
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
                            <iframe
                                src="https://www.youtube.com/embed/ChJGy08Kao0"
                                allowFullScreen="allowFullScreen"
                                title='youTubeVideo01'>
                            </iframe>
                        </div>
                        <div>
                            <iframe
                                src="https://www.youtube.com/embed/G2AxwfRZ_Gc"
                                allowFullScreen="allowFullScreen"
                                title='youTubeVideo02'>
                            </iframe>
                        </div>
                        <div>
                            <iframe
                                src="https://www.youtube.com/embed/MI1dG0rq9Ts"
                                allowFullScreen="allowFullScreen"
                                title='youTubeVideo03'>
                            </iframe>
                        </div>
                        <div>
                            <iframe
                                src="https://www.youtube.com/embed/DrxzA2G-XTA"
                                allowFullScreen="allowFullScreen"
                                title='youTubeVideo04'>
                            </iframe>
                        </div>
                    </Slider>
                </Col>
            </Container>
        </div>
    )
}

export default VideosSlider
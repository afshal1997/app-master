import React from 'react'
import { Col, Container } from 'react-bootstrap'

const MainBanner = () => {
    return (
        <>
            <div className="MostPopularVideosSlider py-5">
                <Container>
                    <Col lg={5} className="m-auto py-5 text-center">
                        <div className="platformText py-5" data-aos="zoom-in">
                            <div className="headingText text-center" data-aos="zoom-in">
                                <h1 className='text-black'>Contant Us</h1>
                            </div>
                        </div>
                    </Col>
                </Container>
            </div>
        </>
    )
}

export default MainBanner
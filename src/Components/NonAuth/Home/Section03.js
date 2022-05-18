import { Link } from '@reach/router'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import mainBannerImg03 from '../../../Assets/Home/mainBannerImg03.png'

const Section03 = () => {
    return (
        <>
            <div className="section03 position-relative ">
                <Container fluid>
                    <Row className="row py-5">
                        <Col lg={5} className="m-auto pb-5">
                            <div className="platformText" data-aos="zoom-in">
                                <h6>
                                    Business & Marketing
                                </h6>
                                <h1 className="my-3" data-aos="zoom-in">
                                    You Can Control Whole Things From One Platform.
                                </h1>
                                <p className="mb-5" data-aos="zoom-in">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                            </div>
                            <div className="customLink" data-aos="zoom-in">
                                <Link to="/">Our Pricing</Link>
                                <Link to="/">Learn More</Link>
                            </div>
                        </Col>
                        <Col lg={5} className="p-0" data-aos="fade-left">
                            <img className="w-100 laptopImg" src={mainBannerImg03} alt="mainBannerImg03" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Section03
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
                                    The Latest Strategies to Increase Your Downloads & Sales
                                </h1>
                                <p className="mb-5" data-aos="zoom-in">
                                Whether it is through our expert guests who break-down their strategies on our YouTube channel or the many tests and strategies we run for our clients, we accumulate a lot of data on what’s working in the app business today. Working with us means you are working with the “encyclopedia” of the app business.
                                </p>
                            </div>
                            <div className="customLink" data-aos="zoom-in">
                                <Link to="/pricing">Our Pricing</Link>
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
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import jobget from '../../../Assets/Pricing/jobget.png'
import sanctuaryaStrology from '../../../Assets/Pricing/sanctuary-astrology-1.png'
import robotCallBlocker from '../../../Assets/Pricing/robot-call-blocker.png'
import geometrySolver from '../../../Assets/Pricing/geometry-solver.png'
import { Link } from '@reach/router'

const Section03 = () => {
    return (
        <>
            <section className='pricing section04'>
                <Container className="my-5">
                    <Col lg={6} className='m-auto'>
                        <h1 className="headingText my-5 text-center">
                            Unlock Your App’s Potential
                        </h1>
                        <div className="mb-5 text-muted text-center paragraphText01">
                            <p>
                                We grow your app downloads, keyword rankings, and more importantly your conversions.
                            </p>
                        </div>
                    </Col>
                    <Row>
                        <Col lg={3} className="text-center mb-4" data-aos="zoom-in">
                            <div className="pricingBox p-3 h-100">
                                <img className="my-2" src={jobget} alt="jobget" />
                                <h3 className="my-4">
                                    JOBGET
                                </h3>
                                <p className="paragraphText01">
                                    56% downloads growth on iOS and 58% growth on Google Play optimizing their keyword strategy.
                                </p>
                            </div>
                        </Col>
                        <Col lg={3} className="text-center mb-4" data-aos="zoom-out">
                            <div className="pricingBox p-3 h-100">
                                <img className="my-2" src={sanctuaryaStrology} alt="sanctuaryaStrology" />
                                <h3 className="my-4">
                                    SANCTUARY ASTROLOGY
                                </h3>
                                <p className="paragraphText01">
                                    75% increase in downloads and top 5 rankings for target keywords including #1 spot for a highly converting keyword.
                                </p>
                            </div>
                        </Col>

                        <Col lg={3} className="text-center mb-4" data-aos="zoom-in">
                            <div className="pricingBox p-3 h-100">
                                <img className="my-2" src={robotCallBlocker} alt="robotCallBlocker" />
                                <h3 className="my-4">
                                    ROBOT CALL BLOCKER
                                </h3>
                                <p className="paragraphText01">
                                    70% increase in conversion and 46% increase in revenue per download optimizing the pricing page.
                                </p>
                            </div>
                        </Col>

                        <Col lg={3} className="text-center mb-4" data-aos="zoom-in">
                            <div className="pricingBox p-3 h-100">
                                <img className="my-2" src={geometrySolver} alt="geometrySolver" />
                                <h3 className="my-4">
                                    GEOMETRY SOLVER
                                </h3>
                                <p className="paragraphText01">
                                    5X increase in daily downloads and 92X increase in revenue optimizing the UI / UX design and monetization strategy.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Col lg={3} className="m-auto mt-5">
                        <Link to='/pricing' className="customBtn text-white">See Pricing</Link>
                    </Col>
                </Container>
            </section>
        </>
    )
}

export default Section03
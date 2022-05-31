import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import icon01 from '../../../Assets/Audit/icon01.png'
import icon02 from '../../../Assets/Audit/icon02.png'
import icon03 from '../../../Assets/Audit/icon03.png'
import icon04 from '../../../Assets/Audit/icon04.png'
import { Link } from '@reach/router'

const Section02 = () => {
    return (
        <section className='audit section04'>
            <Container className="my-5">
                <Col lg={6} className='m-auto'>
                    <h1 className="headingText my-5 text-center">
                        Your app is on the brink of success
                    </h1>
                    <div className="mb-5 text-muted text-center paragraphText01">
                        <h5>
                            We can help you unlock it in just 60 minutes
                        </h5>
                    </div>
                </Col>
                <Row>
                    <Col lg={3} className="text-center mb-4" data-aos="zoom-in">
                        <div className="pricingBox p-3 h-100">
                            <img className="my-2" src={icon01} alt="icon01" />
                            <h5 className="my-4">
                                Geometry Solver
                            </h5>
                            <p className="paragraphText01">
                                5X increase in daily downloads and 30X increase in in-app purchases optimizing the UI / UX design and monetization strategy.
                            </p>
                            <Nav.Link
                                href="https://apps.apple.com/app/geometry-solver/id1226352729"
                                className='customBtn text-white position-absolute'>
                                App Store
                            </Nav.Link>
                        </div>
                    </Col>
                    <Col lg={3} className="text-center mb-4" data-aos="zoom-out">
                        <div className="pricingBox p-3 h-100">
                            <img className="my-2" src={icon02} alt="icon02" />
                            <h5 className="my-4">
                                Ancients Reborn
                            </h5>
                            <p className="paragraphText01">
                                118% increase in organic downloads optimizing keywords and improving keyword ranking.
                            </p>
                            <Nav.Link
                                href="https://play.google.com/store/apps/details?id=com.sensoryplayapps.adventure"
                                className='customBtn text-white position-absolute'>
                                Google Play
                            </Nav.Link>
                        </div>
                    </Col>
                    <Col lg={3} className="text-center mb-4" data-aos="zoom-in">
                        <div className="pricingBox p-3 h-100">
                            <img className="my-2" src={icon03} alt="icon03" />
                            <h5 className="my-4">
                                Robot Call Blocker
                            </h5>
                            <p className="paragraphText01">
                                70% increase in subscription conversion and 46% increase in revenue per download optimizing the pricing page.
                            </p>
                            <Nav.Link
                                href="https://apps.apple.com/app/robot-call-blocker/id1437586931"
                                className='customBtn text-white position-absolute'>
                                App Store
                            </Nav.Link>
                        </div>
                    </Col>
                    <Col lg={3} className="text-center mb-4" data-aos="zoom-in">
                        <div className="pricingBox p-3 h-100">
                            <img className="my-2" src={icon04} alt="icon04" />
                            <h5 className="my-4">
                                Playlist
                            </h5>
                            <p className="paragraphText01">
                                579% increase in organic downloads optimizing keywords and improving app store ratings.
                            </p>
                            <Nav.Link
                                href="https://apps.apple.com/app/playlist-live/id955391408"
                                className='customBtn text-white position-absolute'>
                                App Store
                            </Nav.Link>
                        </div>
                    </Col>
                </Row>
                <Col lg={3} className="m-auto mt-5">
                    <Link to='/pricing' className="customBtn text-white">See Pricing</Link>
                </Col>
            </Container>
        </section>
    )
}

export default Section02
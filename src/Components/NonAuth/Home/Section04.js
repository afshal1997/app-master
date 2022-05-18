
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import searchIcon from '../../../Assets/BrandIcons/search.png'
import editIcon from '../../../Assets/BrandIcons/edit.png'
import settingIcon from '../../../Assets/BrandIcons/setting.png'
import { Link } from '@reach/router'

const Section04 = () => {
    return (
        <>
            <section className='section04'>
                <Container className="my-5">
                    <Col lg={6} className='m-auto'>
                        <h1 className="headingText my-5 text-center">
                            Save Time & Money
                        </h1>
                        <div className="mb-5 text-muted text-center paragraphText01">
                            <p>
                                The problem is you are busy building a great product which makes you feel like you should be doing more or growing faster. We believe in executing the most impactful, cost-effective app marketing strategies not offering bloated services.
                            </p>
                        </div>
                    </Col>
                    <Row>
                        <Col lg={4} className="text-center mb-4" data-aos="zoom-in">
                            <div className="pricingBox p-3 h-100">
                                <img className="my-2" src={searchIcon} alt="searchIcon" />
                                <h3 className="my-4">
                                    Audit
                                </h3>
                                <p className="paragraphText01">
                                    Each app is different. We figure out what stage your app is in and determine what type of growth it needs for ultimate success.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} className="text-center mb-4" data-aos="zoom-out">
                            <div className="pricingBox p-3 h-100">
                                <img className="my-2" src={editIcon} alt="editIcon" />
                                <h3 className="my-4">
                                    Plan
                                </h3>
                                <p className="paragraphText01">
                                    We plan the right strategies to help your unique app grow and crush your next milestone without any wasted marketing efforts.
                                </p>
                            </div>
                        </Col>

                        <Col lg={4} className="text-center mb-4" data-aos="zoom-in">
                            <div className="pricingBox p-3 h-100">
                                <img className="my-2" src={settingIcon} alt="settingIcon" />
                                <h3 className="my-4">
                                    Execute, Optimize & Grow
                                </h3>
                                <p className="paragraphText01">
                                    We execute the most impactful strategies to help you grow your downloads and revenue.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Col lg={3} className="m-auto mt-5">
                        <Link to='/' className="customBtn text-white">See Pricing</Link>
                    </Col>
                </Container>
            </section>
        </>
    )
}

export default Section04
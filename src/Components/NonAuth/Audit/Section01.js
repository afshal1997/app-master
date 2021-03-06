import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import circle from '../../../Assets/Shapes/circle.png'
import { faDesktop, faParking } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMarkdown } from '@fortawesome/free-brands-svg-icons'

const Section01 = () => {
    return (
        <div className='position-relative'>
            <img className='circleImgRight' src={circle} alt="circle" />
            <Container>
                <Col lg={9} className='m-auto text-center position-relative mt-5'>
                    <h2 className='text-primary' data-aos="zoom-in">Uncover Untapped Download and Revenue</h2>
                    <div className="headingText02 text-center mb-4" data-aos="zoom-in">
                        <h5>Opportunities Faster Than Ever</h5>
                    </div>
                </Col>
                <Row>
                    <div className="iconBoxes mt-5">
                        <Row>
                            <Col lg={4} data-aos="zoom-in">
                                <div className="iconBox py-5 px-3">
                                    <FontAwesomeIcon icon={faParking} />
                                    <div className="paragraphText01 text-center text-primary">
                                        <h4>PRODUCT</h4>
                                        <p className='text-muted'>
                                            Build products your customers love. Get valuable feedback throughout the development process.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} data-aos="zoom-out">
                                <div className="iconBox py-5 px-3">
                                    <FontAwesomeIcon icon={faDesktop} />
                                    <div className="paragraphText01 text-center text-primary">
                                        <h4>DESIGN & UX</h4>
                                        <p className='text-muted'>
                                            Discover how users may interact with your designs and fix UX issues to help convey your app's value.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} data-aos="zoom-in">
                                <div className="iconBox py-5 px-3">
                                    <FontAwesomeIcon icon={faMarkdown} />
                                    <div className="paragraphText01 text-center text-primary">
                                        <h4>MARKETING</h4>
                                        <p className='text-muted'>
                                            Stop wasting time and money testing campaigns. Discover the right growth strategies specifically for your app.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Row>
                <Row className="mb-5">
                    <div className="headingText" data-aos="zoom-in">
                        <h2 className='text-center'>
                            Learn how to fix your value propositions
                        </h2>
                    </div>
                    <div className="headingText02 text-center" data-aos="zoom-in">
                        <h5>Product messaging & marketing ??? in just 1 hour</h5>
                    </div>
                </Row>
                <div className="appBoxes mb-5 position-relative">
                    <img className='circleImgLeft' src={circle} alt="circle" />
                    <Row>
                        <Col lg={4} className='m-auto' data-aos="zoom-in">
                            <div className="appBox shadow">
                                <div className="p-4 text-start">
                                    <h2 className='text-primary'>The Basics</h2>
                                    <p className="paragraphText01 text-muted">
                                        Get your app audited during our weekly YouTube Live Streams ??? every Friday at 9am PST!
                                    </p>
                                    <ul className='text-start'>
                                        <li>
                                            Feedback on first-time user experience
                                        </li>
                                        <li>
                                            UI & UX product feedback
                                        </li>
                                        <li>
                                            Monetization feedback
                                        </li>
                                        <li>
                                            15-minute segment on YouTube live stream
                                        </li>
                                        <li>
                                            <del>All-new advanced conversion techniques</del>
                                        </li>
                                        <li>
                                            <del>ASO audit with advanced strategies</del>
                                        </li>
                                    </ul>
                                    <h2 className='text-primary'>FREE</h2>
                                    <p>1 month wait</p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} className='m-auto' data-aos="zoom-out">
                            <div className="appBox shadow">
                                <div className="p-4 text-start">
                                    <h2 className='text-primary'>The Go Getter</h2>
                                    <p className="paragraphText01 text-muted">
                                        Skip the long line from our basic app audit and get 1-on-1 consultation with Steve P. Young.
                                    </p>
                                    <ul className='text-start'>
                                        <li>
                                            Feedback on first-time user experience
                                        </li>
                                        <li>
                                            UI & UX product feedback
                                        </li>
                                        <li>
                                            Monetization feedback
                                        </li>
                                        <li>
                                            15-minute segment on YouTube live stream
                                        </li>
                                        <li>
                                            All-new advanced conversion techniques
                                        </li>
                                        <li>
                                            ASO audit with advanced strategies
                                        </li>
                                    </ul>
                                    <h2 className='text-primary'>$299</h2>
                                    <p>Call within a week of signing up</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Section01
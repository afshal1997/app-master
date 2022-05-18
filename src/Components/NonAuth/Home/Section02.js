import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import redbull from '../../../Assets/BrandIcons/redbull.png'
import mcfee from '../../../Assets/BrandIcons/mcfee.png'
import nextdoor from '../../../Assets/BrandIcons/nextdoor.png'
import wooga from '../../../Assets/BrandIcons/wooga.png'
import icon01 from '../../../Assets/BrandIcons/icon01.png'
import icon02 from '../../../Assets/BrandIcons/icon02.png'
import icon03 from '../../../Assets/BrandIcons/icon03.png'
import youtubeIcon from '../../../Assets/BrandIcons/youtube.png'
import foundersIcon from '../../../Assets/BrandIcons/founders.png'
import podcastIcon from '../../../Assets/BrandIcons/podcast.png'
import circle from '../../../Assets/Shapes/circle.png'

const Section02 = () => {
    return (
        <div className='position-relative'>
            <img className='circleImgRight' src={circle} alt="circle" />
            <Container>
                <div className="customerBox">
                    <Row className="row my-5">
                        <Col lg={3} data-aos="fade-right">
                            <img src={redbull} alt="redbull"></img>
                        </Col>

                        <Col lg={3} data-aos="fade-right">
                            <img src={mcfee} alt="mcfee"></img>
                        </Col>

                        <Col lg={3} data-aos="fade-left">
                            <img src={nextdoor} alt="nextdoor"></img>
                        </Col>

                        <Col lg={3} data-aos="fade-left">
                            <img src={wooga} alt="wooga"></img>
                        </Col>
                    </Row>
                </div>
                <Col lg={9} className='m-auto text-center position-relative'>
                    <h2 className='text-primary' data-aos="zoom-in">We Helped Over 3,326</h2>
                    <div className="headingText02 text-center mb-4" data-aos="zoom-in">
                        <h6>Apps with increasing downloads and sales</h6>
                    </div>
                    <div className="paragraphText text-center text-muted" data-aos="zoom-in">
                        <p>
                            Having worked with all sorts of apps from games to productivity to meditation to some of the craziest ideas you have ever heard, we guide you through our successes and failures to ensure that you have a proven framework to ultimately find your success.
                        </p>
                    </div>
                </Col>
                <Row>
                    <div className="iconBoxes">
                        <Row>
                            <Col lg={4} data-aos="zoom-in">
                                <div className="iconBox py-5 px-3">
                                    <img src={icon01} alt="icon01"></img>
                                    <div className="paragraphText01 text-center">
                                        <p className='text-muted'>
                                            We transformed eTips from an app start-up into a venture-backed company generating multi-million dollars of revenue a year.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} data-aos="zoom-out">
                                <div className="iconBox py-5 px-3">
                                    <img src={icon02} alt="icon02"></img>
                                    <div className="paragraphText01 text-center">
                                        <p className='text-muted'>
                                            We transformed MasterKey Games from just 25 downloads a day to now over 4M downloads and 100,000 monthly active users.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} data-aos="zoom-in">
                                <div className="iconBox py-5 px-3">
                                    <img src={icon03} alt="icon03"></img>
                                    <div className="paragraphText01 text-center">
                                        <p className='text-muted'>
                                            We transformed 35 apps into Apple Features including 4 "App of the Day" Features.
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
                            We Are The Pulse
                        </h2>
                    </div>
                    <div className="headingText02 text-center" data-aos="zoom-in">
                        <h6>Of the app business</h6>
                    </div>
                </Row>
                <div className="appBoxes mb-5 position-relative">
                    <img className='circleImgLeft' src={circle} alt="circle" />
                    <Row>
                        <Col lg={4} data-aos="zoom-out">
                            <div className="appBox">
                                <img src={youtubeIcon} alt="youtubeIcon"></img>
                                <div className="text-center p-4">
                                    <h3>#1 Marketing Youtube Channel</h3>
                                    <p className="paragraphText01 text-muted">
                                        With over 13K subscribers, our videos reveals step-by-step strategies to increase downloads, retention, and monetization.
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} data-aos="zoom-in">
                            <div className="appBox">
                                <img src={podcastIcon} alt="podcastIcon"></img>
                                <div className="text-center p-4">
                                    <h3>#1 App Business  Podcast</h3>
                                    <p className="paragraphText01 text-muted">
                                        With over 800 episodes and 1.3M downloads, the App Masters podcast interviews the top thought leaders in the mobile app space.
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} data-aos="zoom-out">
                            <div className="appBox">
                                <img src={foundersIcon} alt="foundersIcon"></img>
                                <div className="text-center p-4">
                                    <h3>#1 App Founder Mastermind</h3>
                                    <p className="paragraphText01 p-1 text-muted">
                                        With over 100 members and 300M downloads, our mastermind features app entrepreneurs with proven track records of success.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Section02
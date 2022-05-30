import React, { useState } from 'react'
import { Card, Col, Container, Form, Row } from 'react-bootstrap'

const PricingTabs = () => {
    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
    };
    return (
        <div className='PricingTabs pricingtabsCard'>
            <Container>
                <Row className='py-5'>
                    <Col lg={6} className='m-auto text-center'>
                        <Row>
                            <Col lg={4} className='text-center m-auto mb-3'>
                                <h5 className='mb-0'>One App</h5>
                            </Col>
                            <Col lg={3} className='m-auto text-center col-5 mb-3'>
                                <Form>
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                        onClick={handleToggle}
                                    />
                                </Form>
                            </Col>
                            <Col lg={4} className='text-center mb-3'>
                                <h5 className='mb-0'>Unlimited Apps</h5>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Col lg={12} className='m-auto pb-5'>
                    <div className="text-center mb-5">
                        <h1 className={isActive ? "d-block" : 'd-none'}>One App</h1>
                        <h1 className={isActive ? "d-none" : 'd-block'}>Unlimited Apps</h1>
                    </div>
                    <Row>
                        <Col lg={3}>
                            <Card className='shadow'>
                                <Card.Body>
                                    <h2>Essentials</h2>
                                    <h5 className={isActive ? "d-block" : 'd-none'}>$470 / mo</h5>
                                    <h5 className={isActive ? "d-none" : 'd-block'}>$670 / mo</h5>
                                    <Card.Text>
                                        <ul>
                                            <li>
                                                Dedicated project manager
                                            </li>
                                            <li>
                                                Keyword optimization (all regions)
                                            </li>
                                            <li>
                                                App description optimization
                                            </li>
                                            <li>
                                                Creative brief for screenshots
                                            </li>
                                            <li>
                                                Competitive review
                                            </li>
                                            <li>
                                                AppAdvice campaign
                                            </li>
                                            <li>
                                                App Store Feature strategy
                                            </li>
                                            <li>
                                                App audit (UX/UI Feedback)
                                            </li>
                                            <li>
                                                Retention & monetization optimization
                                            </li>
                                        </ul>
                                    </Card.Text>
                                    <Card.Link className='getStarted' href="#">Get Started</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3}>
                            <Card className='shadow'>
                                <Card.Body>
                                    <h2>Growth</h2>
                                    <h5 className={isActive ? "d-block" : 'd-none'}>$970 / mo</h5>
                                    <h5 className={isActive ? "d-none" : 'd-block'}>$1,270 / mo</h5>
                                    <h5 className="text-muted"></h5>
                                    <Card.Text>
                                        <ul>
                                            <li>
                                                Everything in Essentials
                                            </li>
                                            <li>
                                                Dedicated project manager
                                            </li>
                                            <li>
                                                Designs for app icon & screenshots
                                            </li>
                                            <li>
                                                Designs for welcome flow
                                            </li>
                                            <li>
                                                Designs for pricing page
                                            </li>
                                            <li>
                                                Monthly reports
                                            </li>
                                            <li>
                                                Monthly strategy calls
                                            </li>
                                        </ul>
                                    </Card.Text>
                                    <Card.Link className='getStarted' href="#">Get Started</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3}>
                            <Card className='shadow'>
                                <Card.Body>
                                    <h2>Business</h2>
                                    <h5 className={isActive ? "d-block" : 'd-none'}>$1,470 / mo</h5>
                                    <h5 className={isActive ? "d-none" : 'd-block'}>$1,970 / mo</h5>
                                    <Card.Text>
                                        <ul>
                                            <li>
                                                Everything in Essentials
                                            </li>
                                            <li>
                                                Dedicated project manager
                                            </li>
                                            <li>
                                                Reply to App Store Reviews
                                                Apple Search Ads Management
                                            </li>
                                            <li>
                                                Google Ads Management (designs included)
                                            </li>
                                            <li>
                                                Email funnel
                                            </li>
                                            <li>
                                                Monthly reports
                                            </li>
                                            <li>
                                                Bi-weekly strategy calls
                                            </li>
                                        </ul>
                                    </Card.Text>
                                    <Card.Link className='getStarted' href="#">Get Started</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3}>
                            <Card className='shadow'>
                                <Card.Body>
                                    <h2 className={isActive ? "d-block" : 'd-none'}>Full Service</h2>
                                    <h2 className={isActive ? "d-none" : 'd-block'}>Enterprise</h2>
                                    <h5 className={isActive ? "d-block" : 'd-none'}>$3,000 / mo</h5>
                                    <h5 className={isActive ? "d-none" : 'd-block'}>$5,000 / mo</h5>
                                    <Card.Text>
                                        <ul>
                                            <li>
                                                Everything in Business
                                            </li>
                                            <li>
                                                Dedicated project manager
                                            </li>
                                            <li>
                                                Facebook management (video + designs included)
                                            </li>
                                            <li>
                                                Explore new ad channels (Twitter, Reddit, Pinterest, TikTok, Quora)
                                            </li>
                                            <li>
                                                Monthly reports
                                            </li>
                                            <li>
                                                Weekly strategy calls
                                            </li>
                                        </ul>
                                    </Card.Text>
                                    <Card.Link className='getStarted' href="#">Get Started</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Container>
        </div>
    )
}

export default PricingTabs
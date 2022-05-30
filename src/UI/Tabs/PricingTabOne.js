import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const PricingTabOne = () => {
    return (
        <Row>
            <Col lg={3}>
                <Card className='shadow'>
                    <Card.Body>
                        <h2 className='mb-0'>Essentials</h2>
                        <h5 className="text-muted">$470 / mo</h5>
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
                        <h2 className='mb-0'>Growth</h2>
                        <h5 className="text-muted">$970 / mo</h5>
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
                        <h2 className='mb-0'>Business</h2>
                        <h5 className="text-muted">$1,470 / mo</h5>
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
                        <h2 className='mb-0'>Full Service</h2>
                        <h5 className="text-muted">$3,000 / mo</h5>
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
    )
}

export default PricingTabOne
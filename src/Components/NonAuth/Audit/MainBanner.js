import React from 'react'
import { Col, Container } from 'react-bootstrap'

const MainBanner = () => {
    return (
        <div className='auditMainBanner'>
            <Container>
                <Col lg={6} className='m-auto text-center py-5'>
                    <div className="headingText text-primary">
                        <h1>Audit</h1>
                    </div>
                    <h2 className='text-primary' data-aos="fade-down">Get Expert Feedback to Grow</h2>
                    <h4 className='text-primary' data-aos="fade-right">Your App Downloads & Revenue</h4>
                    <p className='text-muted'>
                        We will audit your app to scale up your revenue and scale down your time. Consultation on the right growth strategies and key product features to help better engage your users and increase your monetization.
                    </p>
                </Col>
            </Container>
        </div>
    )
}

export default MainBanner
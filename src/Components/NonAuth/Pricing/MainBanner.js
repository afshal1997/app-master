import React from 'react'
import { Col, Container } from 'react-bootstrap'

const MainBanner = () => {
    return (
        <div className='auditMainBanner'>
            <Container>
                <Col lg={7} className='m-auto text-center py-5'>
                    <div className="headingText text-primary">
                        <h1>Pricing</h1>
                    </div>
                    <h2 className='text-primary' data-aos="fade-down">
                        Increase Your Keyword Rankings, Organic Downloads, and Revenue
                    </h2>
                    <h5 className='text-muted' data-aos="fade-right">
                        <b>
                            Product messaging & marketing … in just 1 hour
                        </b>
                    </h5>
                </Col>
            </Container>
        </div>
    )
}

export default MainBanner
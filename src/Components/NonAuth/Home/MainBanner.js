import { Link } from '@reach/router'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import mainBannerImg01 from '../../../Assets/Home/mainBannerImg01.png'

const MainBanner = () => {
    return (
        <div className="mainBanner position-relative">
            <Container>
                <div className="col-lg-8 m-auto pt-5 text-center position-relative">
                    <div className="customHeading position-relative">
                        <h1 className='text-primary' data-aos="fade-down">Transform Your App Start-Up</h1>
                        <h2 className='text-primary' data-aos="fade-right">Into An App Empire</h2>
                        <Col lg={3} className='m-auto mt-5 mb-5' data-aos="fade-left">
                            <Link to='/pricing' className="customBtn text-white">See Pricing</Link>
                        </Col>
                        <Col lg={8} className='m-auto my-5' data-aos="fade-up">
                            <img className='w-100' src={mainBannerImg01} alt="mainBannerImg01"></img>
                        </Col>
                    </div>
                </div>
                <Row>
                    <Col lg={10} className='m-auto text-center'>
                        <div className="ourCustomer">
                            <h2 className='text-primary' data-aos="flip-down">Just a Few More of Our Customers...</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MainBanner
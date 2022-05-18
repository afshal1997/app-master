import { faBehance, faFacebookF, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from '@reach/router'
import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import logo01 from '../../Assets/Header/footerLogo.png'

const Footer = () => {
  return (
    <div className='footer pt-5'>
      <Container>
          <div className="py-5">
            <Row>
              <Col lg={3} className="text-white">
                <img className='w-75 footerLogo' src={logo01} alt="logo01" />
                <p className="mt-2">
                  We are a small boutique app marketing agency dedicated to helping app publishers grow downloads and sales in the most cost-effective way possible.
                </p>
              </Col>
              <Col lg={3} className="text-white">
                <h4 className='mb-4'>
                  Important Link
                </h4>
                <ul className="footerLinks">
                  <li>
                    <Link className="text-white" to="/">About Company</Link>
                  </li>
                  <li>
                    <Link className="text-white" to="/">Latest Project</Link>
                  </li>
                  <li>
                    <Link className="text-white" to="/">Latest From Blog</Link>
                  </li>
                  <li>
                    <Link className="text-white" to="/">Our Testimonials</Link>
                  </li>
                  <li>
                    <Link className="text-white" to="/">Our Mission</Link>
                  </li>
                  <li>
                    <Link className="text-white" to="/">Contact Us</Link>
                  </li>
                  <li>
                    <Link className="text-white" to="/">About Company</Link>
                  </li>
                </ul>
              </Col>
              <Col lg={3} className="text-white">
                <h4 className='mb-4'>
                  Privacy & Policy
                </h4>
                <ul className="footerLinks">
                  <li>
                    <Link className="text-white" to="/">Terms & Condition</Link>
                  </li>
                  <li>
                    <Link className="text-white" to="/">Support</Link>
                  </li>
                  <li>
                    <Link className="text-white" to="/">Your Privacy</Link>
                  </li>
                  <li>
                    <Link className="text-white" to="/">Our Policy</Link>
                  </li>
                  <li>
                    <Link className="text-white" to="/">Privacy Plans</Link>
                  </li>
                </ul>
              </Col>
              <Col lg={3} className='text-white'>
                <h4 className='mb-4'>
                  Subscribe Now
                </h4>
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" placeholder="Enter Your Email" />
                  </Form.Group>
                  <Button className="inputBtn" type="submit">SUBMIT NOW</Button>
                </Form>
                <div className="social-link">
                  <FontAwesomeIcon className='text-white my-4 mx-2 fa-lg' icon={faFacebookF} />
                  <FontAwesomeIcon className='text-white my-4 mx-2 fa-lg' icon={faTwitter} />
                  <FontAwesomeIcon className='text-white my-4 mx-2 fa-lg' icon={faBehance} />
                  <FontAwesomeIcon className='text-white my-4 mx-2 fa-lg' icon={faYoutube} />
                  <FontAwesomeIcon className='text-white my-4 mx-2 fa-lg' icon={faLinkedin} />
                </div>
              </Col>
            </Row>
          </div>
      </Container>
    </div>
  )
}

export default Footer
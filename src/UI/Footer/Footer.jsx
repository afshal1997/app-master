import { faFacebookF, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
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
                  <Link className="text-white" to="/audit">Audit</Link>
                </li>
                <li>
                  <Link className="text-white" to="/">Pricing</Link>
                </li>
                <li>
                  <a className="text-white" href="https://www.youtube.com/appmasters">Videos</a>
                </li>
                <li>
                  <a className="text-white" href="https://anchor.fm/app-marketing-podcast">Podcast</a>
                </li>
                <li>
                  <Link className="text-white" to="/">Contact</Link>
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
                  <Link className="text-white" to="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link className="text-white" to="/">Sitemap</Link>
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
                <a href="https://www.facebook.com/AppMastersCo/">
                  <FontAwesomeIcon className='text-white my-4 mx-2 fa-lg' icon={faFacebookF} />
                </a>
                <a href="https://www.instagram.com/stevepyoung/">
                  <FontAwesomeIcon className='text-white my-4 mx-2 fa-lg' icon={faInstagram} />
                </a>
                <a href="https://twitter.com/stevepyoung">
                  <FontAwesomeIcon className='text-white my-4 mx-2 fa-lg' icon={faTwitter} />
                </a>
                <a href="https://www.youtube.com/appmasters">
                  <FontAwesomeIcon className='text-white my-4 mx-2 fa-lg' icon={faYoutube} />
                </a>
                <a href="https://linkedin.com/in/stevepyoung/">
                  <FontAwesomeIcon className='text-white my-4 mx-2 fa-lg' icon={faLinkedin} />
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default Footer
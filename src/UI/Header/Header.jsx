import React, { useEffect, useState } from "react";
import { Link } from '@reach/router'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../../Assets/Header/mainLogo.png'

const Header = () => {
  const [color, setColor] = useState('transparent')
  const [blur, setBlur] = useState('blur(0px)')
  const [transition, settransition] = useState('1s')
  const [height, setheight] = useState('200px')
  const listenScrollEvent = e => {
    if (window.scrollY > 100 && window.innerWidth > 992) {
      setColor("rgb(255, 255, 255, 0.9)")
      settransition("1s")
      setBlur("blur(8px)")
      setheight("160px")
    } else {
      document.getElementById("header-menu").style = null
      setColor("transparent")
      settransition("1s")
      setBlur("blur(0px)")
      setheight("200px")
    }
  }
  useEffect(() => {
    listenScrollEvent()
  }, [])
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
  }, [window.location])


  return (
    <Navbar
      fixed="top"
      bg="transparent"
      expand="lg"
      id='header-menu'
      style={{ background: color, backdropFilter: blur, transition: transition }}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="logo" style={{ width: height, transition: transition }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-0 m-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/">Audit</Nav.Link>
            <Nav.Link as={Link} to="/">Pricing</Nav.Link>
            <Nav.Link as={Link} to="/">Videos</Nav.Link>
            <Nav.Link as={Link} to="/">Product</Nav.Link>
            <Nav.Link as={Link} to="/contact-us" className="customBtn text-white">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import * as React from 'react';
import ProfileImage from '../images/ProfileImage.jpeg';
import './css/Header.css'
function Header() {


  const transparentNavbarStyles = {
    position: 'fixed',
    width: '100%',
    zIndex: 999,
  };



  const linkStyles = {
    color: '#F6F1EE',
    fontSize: '18spx',
    textTransform: 'uppercase',
  };

  return (
    <Navbar
      expand="md"
      style={transparentNavbarStyles}
      data-bs-theme="dark"
      variant="dark"
      className='header'
    >
      <Container>
      <Navbar.Brand href="#home">
      <img
      src={ProfileImage}
      width="35"
      height="35"
      className="d-inline-block align-top"
      alt="Profile Image"
      style={{ borderRadius: '50%' }} 
    />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={linkStyles}>
              Home
            </Nav.Link>
            <Nav.Link href="#services" style={linkStyles}>
              Services
            </Nav.Link>
            <Nav.Link href="#contact" style={linkStyles}>
              Contact
            </Nav.Link>
            <Nav.Link href="#about" style={linkStyles}>
              About Me
            </Nav.Link>
            </Nav>
            </Navbar.Collapse>  
      </Container>
    </Navbar>
  );
}

export default Header;

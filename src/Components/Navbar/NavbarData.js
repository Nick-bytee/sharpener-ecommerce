import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap';
import './NavbarData.css'

const NavbarData = () => {
    return (
        <Container>
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: 'center' }}>
                <Nav className='navbar'>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Store</Nav.Link>
                    <Nav.Link href="#link">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    )
}

export default NavbarData
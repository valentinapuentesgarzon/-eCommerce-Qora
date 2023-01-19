import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import './header.css'

import Logo from '../../assets/img/Marca/Logo-sin-fondo.png'

function Header() {
  return (
    <>
    <div id="box-1">
      <h5>Hacemos entregas los Martes y Jueves</h5>
    </div>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container fluid id='box-2'>
            <Navbar.Brand href="#"><img src={Logo} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menú
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Quénes Somos</Nav.Link>
                  <Nav.Link href="#action2">Productos</Nav.Link>
                  <Nav.Link href="#action2">Cómo comprar</Nav.Link>
                  <Nav.Link href="#action2">Contacto</Nav.Link>
                  
                </Nav>
              
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <div id="box-1">
        <p>Aqui va la nav bar</p>
      </div>
    </>
  );
}

export default Header;




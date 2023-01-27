import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './header.css'
import Logo from '../../../assets/img/Marca/Logo-sin-fondo.png'
import ShoppingCart from '../../Global/Header/ShoppingCart/ShoppingCart'
import {useState} from 'react';
import { Link } from 'react-router-dom';

function Header({AllProducts, setAllProducts}) {
  
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  
  const handleOpenOffcanvas = () => {
    setIsOffcanvasOpen(true);
  };
  const handleCloseOffcanvas = () => {
    setIsOffcanvasOpen(false);
  };

  return (
    <>
    <div id="box-1">
      <h5>Hacemos entregas los Martes y Jueves</h5>
    </div>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container fluid id='box-2'>
            <Link to= {'/'}><img id='logo'src={Logo} alt="QORA" /></Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={handleOpenOffcanvas} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              show={isOffcanvasOpen}
              onHide={handleCloseOffcanvas}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menú
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body id='Nav-bar1'>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Quiénes Somos</Nav.Link>
                  <Nav.Link as={Link} to= {'/Components/Productos/Products'}>Productos</Nav.Link>
                  <Nav.Link href="#action2">Cómo comprar</Nav.Link>
                  <Nav.Link href="#action2">Contacto</Nav.Link>
                  
                </Nav>

              
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <ShoppingCart onClick={handleOpenOffcanvas} show={isOffcanvasOpen} onHide={handleCloseOffcanvas}
            AllProducts = {AllProducts} 
            setAllProducts = {setAllProducts} />
          </Container>
        </Navbar>
      ))}
      <div id="box-3">
        <Offcanvas.Body id='Nav-bar2'>
          <Nav className="justify-content-start flex-grow-1 pe-3">
            <Nav.Link id='Tl' href="#action1" >Quiénes Somos</Nav.Link>
            <Nav.Link id='Tl' as={Link} to= {'/Components/Productos/Products'}>Productos</Nav.Link>
            <Nav.Link id='Tl' href="#action2">Cómo comprar</Nav.Link>
            <Nav.Link id='Tl' href="#action2">Contacto</Nav.Link>
          </Nav>
         </Offcanvas.Body>
      </div>
    </>
  );
}

export default Header;




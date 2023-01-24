import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BsFillBagFill } from 'react-icons/bs';
import { GiFruitBowl} from 'react-icons/gi';
import './ShoppingCart.css'
import Basket from '../../../../assets/img/Header/Basket.png'
import ShoppingCartContent from './ShoppingCartContent';


function OffCanvasExample({ AllProducts, setAllProducts, name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  return (
    <>
      {
         AllProducts.length ? (
          <>
            <Button onClick={handleShow} className="me-2" id="shoping-cart-but">
             {name}
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props}>
              <Offcanvas.Header closeButton id="shoping-cart__header">
                <Offcanvas.Title id='tittle'> Tu Mercado <GiFruitBowl/></Offcanvas.Title>
              </Offcanvas.Header>
              <ShoppingCartContent
                  AllProducts = {AllProducts} 
                  setAllProducts = {setAllProducts}/>
            </Offcanvas>
            
          </>
        ) : ( 
          <>
            <Button onClick={handleShow} className="me-2" id="shoping-cart-but">
              {name} 
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props}>
              <Offcanvas.Header closeButton id="shoping-cart__header">
                <Offcanvas.Title id='tittle'> Tu Mercado <GiFruitBowl/></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body id="Shoping-card-body" className='nothing-in-cart'>
                <p id="Shoping-card-body-text">Por ahora no tienes ningún producto</p> 
                <img src={Basket} id="Shop-cart-nothing-image"/>
              </Offcanvas.Body>
            </Offcanvas>
          </>
        )
      }
       
        
    </>
  );
}

function ShopingCart({AllProducts, setAllProducts}) {
  return (
    <>
      {['end'].map((placement, idx) => (
        <OffCanvasExample 
        AllProducts = {AllProducts} 
        setAllProducts = {setAllProducts}
         key={idx} placement={placement} 
         name={<BsFillBagFill id="shoping-cart"/>} />
      ))}
    </>
  );
}

export default ShopingCart;
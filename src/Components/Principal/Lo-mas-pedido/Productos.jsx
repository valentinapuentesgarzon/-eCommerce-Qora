import React from 'react'
import './Productos.css'
import CarruselProductos from './CarruselProductos'
import Button from 'react-bootstrap/Button';
import WAVE1 from '../../../assets/img/Productosdestacados/onda1.png'
import WAVE2 from '../../../assets/img/Productosdestacados/onda2.png'
import WAVE3 from '../../../assets/img/Productosdestacados/onda3.png'
function Productos() {
  return (
    <div id='mainContainer'>
        <h2>Lo mas pedido</h2>
        <CarruselProductos/>
        <div className="mb-2">
        <Button id='Btn'size="lg">
        Descubre
        </Button>{' '}
        </div>
        <div className="figure">
          <img src={WAVE1} alt="wave1" />
        </div>
        <div className="shape1">
          <img src={WAVE2} alt="wave2" />
        </div>
        <div className="shape3">
          <img src={WAVE3} alt="wave2" />
        </div>

    </div>
    
  )
}

export default Productos
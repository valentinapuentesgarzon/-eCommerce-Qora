import Carrusel from './Carrusel'
import React from 'react'
import Button from 'react-bootstrap/Button';
import './Section-Huerto.css'
import WAVE1 from '../../assets/img/Conoce-nuestro-huerto/onda-1-conoce-huerto.png';
import WAVE2 from '../../assets/img/Conoce-nuestro-huerto/onda-2-conoce-huerto.png'


function Huerto() {
  return (
    <div id='mainContainer'>
        <h2>Conoce nuestro huerto</h2>
        <Carrusel/>
        <div className="mb-2">
        <Button id='Btn'size="lg">
        Descubre
        </Button>{' '}
        </div>

        <div className="figure">
            <img src={WAVE1} alt="" />
        </div>

        <div className="figure2">
            <img id='wave2' src={WAVE2} alt="" />
        </div>
    </div>

  )
}

export default Huerto
import React from 'react'
import Mix from '../../assets/img/Productos/Mix-asiaticas.png'
import './Products.css'
import Button from 'react-bootstrap/Button'

import { AiFillPlusCircle } from 'react-icons/ai';
import Filtros from './Filtros'





function Products() {
  return (
    <>
        <Filtros/>
        <div className= 'CardBox'>
            <div className="square">
                <div className="imagen">
                    <img src={Mix} alt="" />
                </div>
                <div className="text">
                    <p>Mix Asiáticas</p>
                    <p>x500g</p>
                    <p>$4500</p>
                </div>
                <div className="botones">
                    <div className="contador">
                        <div id='icon'></div>
                        <p>1</p>
                        <div id='icon'></div>
                    </div>
                    <div className="boton">
                    <Button id="Btn-sm"size="sm">
                        Agregar
                    </Button> 
                    </div>
                </div>
            </div>
        </div>
        


    </>
  )
}

export default Products
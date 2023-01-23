import React from 'react'
import './Products.css'
import Button from 'react-bootstrap/Button'
import Filtros from './Filtros'
import { AiFillMinusCircle } from 'react-icons/ai';
import { AiFillPlusCircle } from 'react-icons/ai';
import {Productos} from './datos'
import Header from '../Global/Header/header';


const Products = ({AllProducts, SetAllProducts}) => {
    const  onAddProduct = () =>{
        console.log ("add");
    }
  return (
    <>

    <Header/>
    <div id='Contenedor'>
        <div className="Filtros">
            <Filtros/>
        </div>
        <div className= 'CardBox'>
           {
            Productos.map(({Name, Peso, Precio, imagen, alt}, index) => {
                return (
                    <div key={index} className="square">
                        <div className="imagen">
                            <img src={imagen} alt={alt} />
                        </div>
                        <div className="text">
                            <p>{Name}</p>
                            <p>{Peso}</p>
                            <p>${Precio}</p>
                        </div>
                        <div className="botones">
                            <div className="contador">
                                <div id='icon'><AiFillMinusCircle/></div>
                                <p>1</p>
                                <div id='icon'><AiFillPlusCircle/></div>
                            </div>
                            <div className="boton">
                            <Button onClick={() => onAddProduct()} id="Btn-sm"size="sm">
                                Agregar
                            </Button> 
                            </div>
                        </div>
                    </div>
                )
            })
           }
            
        </div>
        


    </div>
    </>
  )
}

export default Products
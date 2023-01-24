import React from 'react'
import './Products.css'
import Button from 'react-bootstrap/Button'
import Filtros from './Filtros'
import { AiFillMinusCircle } from 'react-icons/ai';
import { AiFillPlusCircle } from 'react-icons/ai';
import {Productos} from './datos.js'
import Header from '../Global/Header/header';


const Products = ({AllProducts, setAllProducts}) => {
    const  onAddProduct = (product) =>{
        setAllProducts([...AllProducts, product])
    }
  return (
    <>

    <Header
    AllProducts={AllProducts} 
    setAllProducts={setAllProducts} />
    <div id='Contenedor'>
        <div className="Filtros">
            <Filtros/>
        </div>
        <div className= 'CardBox'>
           {
            Productos.map( product => {
                return (
                    <div key={product.id} className="square">
                        <div className="imagen">
                            <img src={product.imagen} alt={product.alt} />
                        </div>
                        <div className="text">
                            <p>{product.Name}</p>
                            <p>{product.Peso}</p>
                            <p>${product.Precio}</p>
                        </div>
                        <div className="botones">
                            <div className="contador">
                                <div id='icon'><AiFillMinusCircle/></div>
                                <p>1</p>
                                <div id='icon'><AiFillPlusCircle/></div>
                            </div>
                            <div className="boton">
                            <Button onClick={() => onAddProduct(product)} id="Btn-sm"size="sm">
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
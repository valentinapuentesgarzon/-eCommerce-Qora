import React from 'react'
import './Products.css'


function Filtros() {
  return (
  <div>
    <div className="Filtros">
      <h5>Filtros</h5>
      <div className="Filtros_radios">
        <div>
            <input type="radio" name="Aromáticas" id="" />
            <label htmlFor=''>Aromática</label>
        </div>
        <div>
            <input type="radio" name="Frutos" id="" />
            <label htmlFor=''>Fruto</label>
        </div>
        <div>
            <input type="radio" name="Hortalizas" id="" />
            <label htmlFor=''>Hortaliza</label>
        </div>
        <div>
            <input type="radio" name="Lechugas" id="" />
            <label htmlFor=''>Lechuga</label>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Filtros


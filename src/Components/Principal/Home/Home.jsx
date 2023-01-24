import React from 'react'
import './Home.css'
import Button from 'react-bootstrap/Button';
import Header from '../../../Components/Global/Header/header'
import Huerto from '../../Principal/ConoceNuestroHuerto/Section-huerto'
import Beneficios from '../../Principal/Nuestros-alimentos-son/Beneficios'
import Productos from '../../Principal/Lo-mas-pedido/Productos'
import Footer from '../../Global/Footer/footer'
import { Link } from 'react-router-dom'

function Home({AllProducts, setAllProducts}) {
  return (
    <>
    <Header 
    AllProducts={AllProducts} 
    setAllProducts={setAllProducts}/>
    <div className="box">
      <h1>Cultivamos Orgánico</h1>
      <h2>Llevamos los mejores productos naturales </h2>
      <h2>a la puerta de tu casa</h2>
      <div className="mb-2">
          <Button as={Link} to= {'/Components/Productos/Products'} id='Btn'size="lg">
            Comprar
          </Button>{' '}
        </div>
    </div>
    <Huerto/>
    <Beneficios/>
    <Productos/>
    <Footer/>

    </>
  )
}

export default Home
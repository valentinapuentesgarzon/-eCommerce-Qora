import React from 'react'
import './Home.css'
import Button from 'react-bootstrap/Button';


function Home() {
  return (
   <div className="box">
     <h1>Cultivamos Orgánico</h1>
     <h2>Llevamos los mejores productos naturales </h2>
     <h2>a la puerta de tu casa</h2>
     <div className="mb-2">
        <Button id='Btn'size="lg">
          Comprar
        </Button>{' '}
      </div>
   </div>
  )
}

export default Home
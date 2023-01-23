import './App.css'
import {Route, Routes } from 'react-router-dom'
import Home from './Components/Principal/Home/Home'
import Products from './Components/Productos/Products'
import { useState } from 'react'


function App() {
    //estado para los productos que se van añadiendo al carrito
    const [AllProducts, setAllProducts] = useState([]);

    //estado para el total
    const [Total, setTotal] = useState(0);
  
    //estado para contador de productos
    const [CountProducts, setCountProducts] = useState(0);

  return (
    <>
      <Routes>
      <Route path="/" element={<Home
      AllProducts={AllProducts} 
      setAllProducts={setAllProducts} 
      Total={Total} 
      setTotal={setTotal} 
      CountProducts={CountProducts} 
      setCountProducts={setCountProducts}

      />}/>
      <Route path="/Components/Productos/Products" element={<Products
      AllProducts={AllProducts} 
      setAllProducts={setAllProducts} 
      Total={Total} 
      setTotal={setTotal} 
      CountProducts={CountProducts} 
      setCountProducts={setCountProducts}/>}/>
      </Routes>

    
      
      
    </>
  )
  
}

export default App

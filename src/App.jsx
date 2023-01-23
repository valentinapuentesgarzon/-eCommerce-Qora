import './App.css'
import {Route, Routes } from 'react-router-dom'
import Home from './Components/Principal/Home/Home'
import Products from './Components/Productos/Products'


function App() {
  return (
    <>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/Components/Productos/Products" element={<Products/>}/>
    </Routes>

    
      
      
    </>
  )
  
}

export default App

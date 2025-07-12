import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './components/Products'
import ProductDetail from './pages/ProductDetail'

const App = () => {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/collections' element={<Products />} />
      <Route path="/product/:slug" element={<ProductDetail />} />

      
     </Routes>
    </div>
  )
}

export default App

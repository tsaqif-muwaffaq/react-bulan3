import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import PrivateRoute from './components/PrivateRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ProductSearch from './pages/ProductSearch'
import ProductDetail from './pages/ProductDetail'
import NotFound from './pages/NotFound'
import './index.css'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path='/products/:id' element={<ProductDetail />} />
        <Route path='/products' element={<ProductSearch />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App

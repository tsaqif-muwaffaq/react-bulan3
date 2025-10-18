import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Dashboard from './pages/Dashboard';
import DashboardProfile from './pages/DashboardProfile';
import DashboardSettings from './pages/DashboardSettings';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />

          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<p className="dashboard-placeholder">Pilih menu di atas untuk melihat konten.</p>} />
            <Route path="profile" element={<DashboardProfile />} />
            <Route path="settings" element={<DashboardSettings />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

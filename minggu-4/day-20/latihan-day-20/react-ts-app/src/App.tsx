import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { AppProvider } from "./context/AppContext";
import ErrorBoundary from "./components/ErrorBoundary";

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <div className="app">
          <header style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:12}}>
            <h1>tugas react js day 20</h1>
            <nav>
              <Link to="/">Home</Link>{" | "}<Link to="/profile">Profile</Link>{" | "}<Link to="/products">Products</Link>
            </nav>
          </header>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/products" element={<div className='card'><h2>Products</h2><p>Open console to test ProductList usage.</p></div>} />
            </Routes>
          </ErrorBoundary>
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;

import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <nav className="dashboard-nav">
        <ul>
          <li><NavLink to="profile">Profil Saya</NavLink></li>
          <li><NavLink to="settings">Pengaturan</NavLink></li>
        </ul>
      </nav>
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;

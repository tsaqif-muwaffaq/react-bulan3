import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <h2 className="notfound-subtitle">Halaman Tidak Ditemukan</h2>
      <p>Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.</p>
      <Link to="/" className="notfound-link">Kembali ke Beranda</Link>
    </div>
  );
}

export default NotFound;

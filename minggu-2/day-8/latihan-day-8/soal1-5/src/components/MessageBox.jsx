import React from 'react';

function MessageBox({ isLoggedIn, messages }) {
  return (
    <div>
      <h2>Contoh Conditional Rendering - Ternary & &&</h2>

      {/* Ternary operator */}
      <p>{isLoggedIn ? 'Selamat datang kembali!' : 'Silakan login terlebih dahulu.'}</p>

      {/* && operator */}
      {messages.length > 0 && (
        <p>Anda memiliki {messages.length} pesan baru </p>
      )}
    </div>
  );
}

export default MessageBox;

import React from 'react';

function StatusInfo({ status }) {
  let content;

  switch (status) {
    case 'loading':
      content = <p> Memuat data...</p>;
      break;
    case 'success':
      content = <p style={{ color: 'green' }}>Data berhasil dimuat!</p>;
      break;
    case 'error':
      content = <p style={{ color: 'red' }}>Terjadi kesalahan saat memuat data.</p>;
      break;
    default:
      content = <p> Status tidak diketahui.</p>;
  }

  return (
    <div>
      <h2>Contoh Conditional Rendering - Switch Statement</h2>
      {content}
    </div>
  );
}

export default StatusInfo;

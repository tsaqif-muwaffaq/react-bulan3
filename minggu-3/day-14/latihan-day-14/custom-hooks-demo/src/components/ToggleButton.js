import React from 'react';
import useToggle from '../hooks/useToggle';

export default function ToggleButton() {
  const [isVisible, toggleVisible] = useToggle(false);

  return (
    <div>
      <button onClick={toggleVisible}>
        {isVisible ? 'Sembunyikan Pesan' : 'Tampilkan Pesan'}
      </button>
      {isVisible && <p>🔐 Ini adalah pesan rahasia! 🔐</p>}
    </div>
  );
}

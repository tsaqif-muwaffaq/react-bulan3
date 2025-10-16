import React from 'react';
import useToggle from '../hooks/useToggle';

export default function SwitchLight() {
  const [isOn, toggleSwitch] = useToggle(true);

  return (
    <div style={{ marginTop: '1rem' }}>
      <p>Lampu saat ini: <strong>{isOn ? '🌞 NYALA' : '🌑 MATI'}</strong></p>
      <button onClick={toggleSwitch}>Ubah Status Lampu</button>
    </div>
  );
}

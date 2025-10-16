import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export default function ThemePreference() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div
      style={{
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '1rem',
      }}
    >
      <p>Mode saat ini: <strong>{theme}</strong></p>
      <button onClick={toggleTheme}>Ganti Tema</button>
    </div>
  );
}

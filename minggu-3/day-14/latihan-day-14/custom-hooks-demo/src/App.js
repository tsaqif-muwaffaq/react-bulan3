import React from 'react';
import ToggleButton from './components/ToggleButton';
import SwitchLight from './components/SwitchLight';
import PostViewer from './components/PostViewer';
import CounterWithToggle from './components/CounterWithToggle';
import FormExample from './components/FormExample';
import ThemePreference from './components/ThemePreference';
import './styles.css';


export default function App() {
  return (
    <div className="app-container">
      <h1>tugas react js day 14</h1>

      <h2>1. useToggle</h2>
      <ToggleButton />
      <SwitchLight />

      <h2>2. useFetch</h2>
      <PostViewer />

      <h2>3. useCounterWithToggle</h2>
      <CounterWithToggle />

      <h2>4. useForm</h2>
      <FormExample />

      <h2>5. useLocalStorage</h2>
      <ThemePreference />

      <hr />
      <p style={{ textAlign: 'center', color: '#888' }}>
      </p>
    </div>
  );
}

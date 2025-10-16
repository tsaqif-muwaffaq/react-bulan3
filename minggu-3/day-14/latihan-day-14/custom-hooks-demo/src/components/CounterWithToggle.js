import React from 'react';
import useCounterWithToggle from '../hooks/useCounterWithToggle';

export default function CounterWithToggle() {
  const { count, increment, decrement, reset, isVisible, toggleVisible } = useCounterWithToggle();

  return (
    <div>
      <button onClick={toggleVisible}>
        {isVisible ? 'Sembunyikan Counter' : 'Tampilkan Counter'}
      </button>

      {isVisible && (
        <div>
          <h3>Count: {count}</h3>
          <button onClick={increment}>Tambah</button>
          <button onClick={decrement}>Kurang</button>
          <button onClick={reset}>Reset</button>
        </div>
      )}
    </div>
  );
}

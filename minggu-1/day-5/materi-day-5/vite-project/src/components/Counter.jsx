import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    // Ini mungkin tidak bekerja dengan benar jika ada banyak pembaruan cepat
    // setCount(count + 1);

    // Ini adalah cara yang lebih aman karena menggunakan nilai state sebelumnya
    setCounter(prevCounter => prevCounter + 1);
  };

  const decrement = () => {
    setCounter(prevCounter => prevCounter - 1);
  };

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={increment}>Tambah</button>
      <button onClick={decrement}>Kurang</button>
    </div>
  );
}

export default Counter;
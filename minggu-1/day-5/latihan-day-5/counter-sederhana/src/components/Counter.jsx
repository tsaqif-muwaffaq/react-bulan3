import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h3>Jumlah: {count}</h3>
      <div className="counter-controls">
         {/* functional update */}
        <button onClick={() => setCount((prev) => prev - 1)}>- Kurang</button>
        <button onClick={() => setCount((prev) => prev + 1)}>+ Tambah</button>
      </div>
    </div>
  );
}

export default Counter;

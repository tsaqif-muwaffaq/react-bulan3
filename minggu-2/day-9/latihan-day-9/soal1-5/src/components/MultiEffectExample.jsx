import { useState, useEffect } from "react";

export default function MultiEffectExample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  useEffect(() => {
    console.log(`Nama berubah menjadi: ${name}`);
  }, [name]);

  return (
    <div>
      <h2>Multi Effect Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
      <input
        type="text"
        placeholder="Masukkan nama"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

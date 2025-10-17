import React, { useMemo, useState } from "react";

export default function HeavyCalculation() {
  const [number, setNumber] = useState(0);

  // Simulasi perhitungan berat
  const factorial = useMemo(() => {
    console.log("Calculating factorial...");
    const calc = (n) => (n <= 1 ? 1 : n * calc(n - 1));
    return calc(number);
  }, [number]); // hanya dihitung ulang kalau 'number' berubah

  return (
    <div>
      <h3>useMemo Example</h3>
      <p>Faktorial dari {number} adalah: {factorial}</p>
      <button onClick={() => setNumber(number + 1)}>Tambah</button>
    </div>
  );
}

import React, { useState } from "react";

function NumberInput({ label, value, onChange }) {
  return (
    <div style={{ margin: "10px 0" }}>
      <label>{label}: </label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}

function LiftingStateExample() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <h2>Lifting State Up</h2>
      <NumberInput label="Angka A" value={number} onChange={setNumber} />
      <NumberInput label="Angka B" value={number} onChange={setNumber} />
      <p>Nilai saat ini: {number}</p>
    </div>
  );
}

export default LiftingStateExample;

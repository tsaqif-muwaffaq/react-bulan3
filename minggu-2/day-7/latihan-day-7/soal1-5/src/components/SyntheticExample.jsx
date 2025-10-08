import React from "react";

export default function SyntheticExample() {
  const handleChange = (e) => {
    console.log("SyntheticEvent:", e);
    alert(`Kamu mengetik: ${e.target.value}`);
  };

  return (
    <div>
      <h2>Soal 2: SyntheticEvent</h2>
      <input type="text" onChange={handleChange} placeholder="Ketik sesuatu..." />
    </div>
  );
}

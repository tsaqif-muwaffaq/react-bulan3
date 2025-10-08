import React from "react";

export default function ButtonEvents() {
  const handleClick = () => {
    alert("Tombol diklik!");
  };

  return (
    <div>
      <h2>Soal 1: Event Handler Sederhana</h2>
      <button onClick={handleClick}>Klik Saya</button>
    </div>
  );
}

import React, { useState } from "react";

export default function ControlledForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nama yang dikirim: ${name}`);
  };

  return (
    <div>
      <h2>Soal 3: Controlled Component</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Masukkan nama"
        />
        <button type="submit">Kirim</button>
      </form>
    </div>
  );
}

import React, { useRef } from "react";

export default function UncontrolledForm() {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nama yang dikirim: ${inputRef.current.value}`);
  };

  return (
    <div>
      <h2>Soal 4: Uncontrolled Component</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} placeholder="Masukkan nama" />
        <button type="submit">Kirim</button>
      </form>
    </div>
  );
}

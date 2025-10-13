import React, { useState } from "react";

function InputBox({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Ketik sesuatu..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ padding: "5px", margin: "5px" }}
    />
  );
}

function DisplayBox({ text }) {
  return <p>Saudara menampilkan: {text}</p>;
}

function StateSharingExample() {
  const [sharedText, setSharedText] = useState("");

  return (
    <div>
      <h2>State Sharing Antar Komponen</h2>
      <InputBox value={sharedText} onChange={setSharedText} />
      <DisplayBox text={sharedText} />
    </div>
  );
}

export default StateSharingExample;

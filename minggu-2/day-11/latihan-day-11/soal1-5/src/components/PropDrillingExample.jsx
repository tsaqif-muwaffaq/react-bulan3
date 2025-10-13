import React from "react";

function Grandchild({ message }) {
  return <p>Pesan di level paling bawah: {message}</p>;
}

function Child({ message }) {
  return (
    <div style={{ marginLeft: "20px" }}>
      <h4>Komponen Child</h4>
      <Grandchild message={message} />
    </div>
  );
}

function Parent({ message }) {
  return (
    <div style={{ marginLeft: "20px" }}>
      <h3>Komponen Parent</h3>
      <Child message={message} />
    </div>
  );
}

function PropDrillingExample() {
  const data = "Assalamualaikum dari App!";
  return (
    <div>
      <h2>Prop Drilling Example</h2>
      <Parent message={data} />
    </div>
  );
}

export default PropDrillingExample;

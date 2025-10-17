import React from "react";

const Greeting = ({ name }) => {
  console.log("Greeting component rendered!");
  return <h2>Halo, {name}!</h2>;
};

// Komponen hanya render ulang jika props berubah
export default React.memo(Greeting);

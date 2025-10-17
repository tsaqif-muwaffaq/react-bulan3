import React, { useCallback, useState } from "react";

export default function ButtonCallback() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked!");
    setCount((prev) => prev + 1);
  }, []); // fungsi tidak dibuat ulang setiap render

  return (
    <div>
      <h3>useCallback Example</h3>
      <button onClick={handleClick}>Klik Saya ({count})</button>
    </div>
  );
}

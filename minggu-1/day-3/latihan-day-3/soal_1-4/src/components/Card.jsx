// 3
import React from "react";

function Card({ children }) {
  return (
    <div
      style={{
        border: "2px solid #252525ff",
        borderRadius: "10px",
        padding: "16px",
        marginBottom: "20px",
        backgroundColor: "#0028c7ff",
      }}
    >
      {children}
    </div>
  );
}

export default Card;

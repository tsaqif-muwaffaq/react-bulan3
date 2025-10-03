// 2
import React from "react";

function ProductCard({ productName, price, stock, isAvailable }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "12px",
        borderRadius: "8px",
        marginBottom: "12px",
        width: "250px",
      }}
    >
      <h3>{productName}</h3>
      <p>💲 Harga: ${price}</p>
      <p>📦 Stok: {stock}</p>
      <p>
        ✅ Status:{" "}
        {isAvailable ? "Tersedia" : "Tidak Tersedia"}
      </p>
    </div>
  );
}

// Default props
ProductCard.defaultProps = {
  stock: 0,
  isAvailable: false,
};

export default ProductCard;

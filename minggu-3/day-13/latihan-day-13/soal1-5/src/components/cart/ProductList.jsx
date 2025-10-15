import React from "react";
import { useCart } from "../../contexts/CartContext";

const products = [
  { id: 1, name: "Kemeja Flanel", price: 120000 },
  { id: 2, name: "Celana Jeans", price: 200000 },
  { id: 3, name: "Hoodie Oversized", price: 250000 },
];

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <div>
      <h2>🛍️ Daftar Produk</h2>
      {products.map((p) => (
        <div key={p.id} style={{ marginBottom: "10px" }}>
          <span>
            {p.name} - Rp {p.price.toLocaleString()}
          </span>
          <button onClick={() => addToCart(p)}>Tambah ke Keranjang</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

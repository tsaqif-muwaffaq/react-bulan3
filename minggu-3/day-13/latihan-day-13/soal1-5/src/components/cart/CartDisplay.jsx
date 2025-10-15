import React from "react";
import { useCart } from "../../contexts/CartContext";

const CartDisplay = () => {
  const { cart, total, clearCart } = useCart();

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>🧺 Keranjang Belanja</h2>
      {cart.length === 0 ? (
        <p>Keranjang kosong</p>
      ) : (
        <>
          <ul>
            {cart.map((item, i) => (
              <li key={i}>
                {item.name} - Rp {item.price.toLocaleString()}
              </li>
            ))}
          </ul>
          <h3>Total: Rp {total.toLocaleString()}</h3>
          <button onClick={clearCart}>Hapus Semua</button>
        </>
      )}
    </div>
  );
};

export default CartDisplay;

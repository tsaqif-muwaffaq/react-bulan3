// src/components/MathExpression.jsx
import React from "react";

function formatRupiah(number) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(number);
}

export default function MathExpression({ price = 120000, discountPercent = 15, userName = "Santri" }) {
  const discount = (price * discountPercent) / 100;
  const final = price - discount;

  const greet = (name) => `Halo, ${name.toUpperCase()}! Selamat belajar.`;

  return (
    <div>
      <h3>{greet(userName)}</h3>
      <p>Harga awal: {formatRupiah(price)}</p>
      <p>Diskon: {discountPercent}% ({formatRupiah(discount)})</p>
      <p style={{ fontWeight: 700 }}>Harga setelah diskon: {formatRupiah(final)}</p>

      {/* Contoh ekspresi lain */}
      <p>Kata terbalik: {"react".split("").reverse().join("")}</p>
    </div>
  );
}

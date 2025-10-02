// src/components/ListRenderer.jsx
import React from "react";

export default function ListRenderer({ items = [] }) {
  return (
    <div>
      <h4>Daftar</h4>
      <ul>
        {items.length === 0 ? (
          <li>Belum ada item.</li>
        ) : (
          items.map((it) => (
            // Jika item berupa objek, gunakan it.id sebagai key
            <li key={typeof it === "object" ? it.id : it}>{typeof it === "object" ? it.name : it}</li>
          ))
        )}
      </ul>
    </div>
  );
}

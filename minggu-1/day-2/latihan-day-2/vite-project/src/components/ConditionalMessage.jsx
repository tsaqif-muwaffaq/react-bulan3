// src/components/ConditionalMessage.jsx
import React from "react";

export default function ConditionalMessage({ isLoggedIn = false, messages = 0 }) {
  return (
    <div>
      {/* Ternary operator */}
      <h3>{isLoggedIn ? "Selamat datang kembali!" : "Silakan login untuk melanjutkan."}</h3>

      {/* Logical AND: hanya tampil kalau isLoggedIn true */}
      {isLoggedIn && (
        <p>
          Kamu punya <strong>{messages}</strong> pesan baru.
        </p>
      )}

      {/* Contoh kombinasi */}
      <p>
        Status:{" "}
        {isLoggedIn ? (
          <span style={{ color: "green" }}>Online</span>
        ) : (
          <span style={{ color: "red" }}>Offline</span>
        )}
      </p>
    </div>
  );
}

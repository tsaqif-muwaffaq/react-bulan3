// src/components/ProfileCard.jsx
import React from "react";

export default function ProfileCard({ name, photo, bio, skills }) {
  const cardStyle = {
    border: "1px solid #1c00d3ff",
    borderRadius: 12,
    padding: 16,
    width: 300,
    backgroundColor: "#004e9cff",
    boxShadow: "0 6px 18px rgba(0, 0, 0, 1)",
    fontFamily: "Inter, system-ui, sans-serif",
  };

  const avatarStyle = {
    width: 110,
    height: 110,
    borderRadius: "50%",
    objectFit: "cover",
    display: "block",
    margin: "0 auto 12px",
  };

  return (
    <article style={cardStyle} aria-label={`Profile card ${name}`}>
      <img src={photo} alt={`${name} avatar`} style={avatarStyle} />
      <h3 style={{ textAlign: "center", margin: 6 }}>{name}</h3>
      <p style={{ fontSize: 14, color: "#000000ff", marginBottom: 12 }}>{bio}</p>

      <div>
        <h4 style={{ marginBottom: 8 }}>keahlian</h4>
        <ul style={{ paddingLeft: 18, margin: 0 }}>
          {skills && skills.length > 0 ? (
            skills.map((s, i) => (
              <li key={s + "-" + i} style={{ marginBottom: 6 }}>
                {s}
              </li>
            ))
          ) : (
            <li>Tidak ada keahlian yang ditambahkan.</li>
          )}
        </ul>
      </div>
    </article>
  );
}

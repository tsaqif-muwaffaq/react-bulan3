import React, { useState } from "react";

function UserProfile() {
  const [name, setName] = useState("John Doe");
  const [age, setAge] = useState(25);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="user-profile">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Masukkan nama"
          />
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            placeholder="Masukkan umur"
          />
          <button onClick={() => setIsEditing(false)}>Simpan</button>
        </div>
      ) : (
        <div>
          <p>Nama: {name}</p>
          <p>Umur: {age}</p>
          <button onClick={() => setIsEditing(true)}>Edit Profil</button>
        </div>
      )}
    </div>
  );
}

export default UserProfile;

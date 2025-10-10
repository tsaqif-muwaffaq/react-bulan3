import { useState, useEffect } from "react";

export default function UserProfile() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [userId]);

  return (
    <div>
      <h2>Profil Pengguna</h2>
      {user ? (
        <p>{user.name} ({user.email})</p>
      ) : (
        <p>Memuat data...</p>
      )}
      <button onClick={() => setUserId(prev => prev + 1)}>
        Lihat Pengguna Berikutnya
      </button>
    </div>
  );
}

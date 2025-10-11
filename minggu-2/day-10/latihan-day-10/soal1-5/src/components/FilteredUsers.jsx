import React, { useState, useEffect } from "react";
import axios from "axios";

function FilteredUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        const filtered = res.data
          .map(u => ({
            id: u.id,
            name: u.name,
            email: u.email,
            city: u.address.city,
          }))
          .filter(u => u.city === "Gwenborough");
        setUsers(filtered);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, []);

  if (loading) return <p>Memuat pengguna...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="card">
      <h3>Pengguna dari Kota Gwenborough</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.email}) - {user.city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilteredUsers;

import React, { useState, useEffect } from "react";
import axios from "axios";

function AxiosUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users/1");
        setUser(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, []);

  if (loading) return <p>Memuat pengguna...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="card">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Telepon: {user.phone}</p>
    </div>
  );
}

export default AxiosUser;

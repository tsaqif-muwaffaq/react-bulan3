import React, { useState, useEffect } from "react";

function FetchWithLoadingError() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // URL bisa kamu ganti untuk uji error (misal: tambahkan typo)
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/3");
        if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Tampilkan kondisi sesuai status
  if (loading) return <p>⏳ Sedang memuat data...</p>;
  if (error) return <p style={{ color: "red" }}>❌ Terjadi kesalahan: {error.message}</p>;

  return (
    <div className="card">
      <h3>Data Berhasil Dimuat</h3>
      <p><strong>{data.title}</strong></p>
      <p>{data.body}</p>
    </div>
  );
}

export default FetchWithLoadingError;

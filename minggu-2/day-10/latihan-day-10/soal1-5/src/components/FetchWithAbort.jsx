import React, { useState, useEffect } from "react";

function FetchWithAbort() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const getData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/2", {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
        const data = await res.json();
        setData(data);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Fetch dibatalkan");
        } else {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    getData();

    return () => controller.abort();
  }, []);

  if (loading) return <p>Memuat data dengan pembatalan...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="card">
      <h3>{data.title}</h3>
      <p>{data.body}</p>
    </div>
  );
}

export default FetchWithAbort;

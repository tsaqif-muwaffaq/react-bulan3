import React, { useState, useEffect } from "react";

function FetchPost() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
        const data = await res.json();
        setPost(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getPost();
  }, []);

  if (loading) return <p>Memuat data...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="card">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}

export default FetchPost;

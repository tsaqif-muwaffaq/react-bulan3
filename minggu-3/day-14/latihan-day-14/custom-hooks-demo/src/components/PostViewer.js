import React from 'react';
import useFetch from '../hooks/useFetch';

export default function PostViewer() {
  const { data: post, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  if (loading) return <p>⏳ Sedang memuat...</p>;
  if (error) return <p>❌ Terjadi kesalahan: {error.message}</p>;
  if (!post) return <p>Tidak ada data.</p>;

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductDetail.css";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal mengambil data produk:", err);
        setLoading(false);
      });
  }, [productId]);

  if (loading) return <h2 className="loading-text">Loading detail produk...</h2>;

  if (!product) return <h2 className="error-text">Produk tidak ditemukan.</h2>;

  return (
    <div className="detail-container">
      <div className="detail-card">
        <img src={product.image} alt={product.title} />
        <div className="detail-info">
          <h2>{product.title}</h2>
          <p className="category">Kategori: {product.category}</p>
          <p className="price">Rp {(product.price * 16000).toLocaleString("id-ID")}</p>
          <p className="desc">{product.description}</p>
          <button>Tambah ke Keranjang</button>
          <Link to="/products" className="back-link">
            ← Kembali ke daftar produk
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

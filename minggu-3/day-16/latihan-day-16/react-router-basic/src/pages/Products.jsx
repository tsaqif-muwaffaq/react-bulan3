import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import CategoryFilter from "../components/CategoryFilter";

function Products() {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mengambil semua produk dan kategori secara bersamaan
    Promise.all([
      fetch("https://fakestoreapi.com/products").then((res) => res.json()),
      fetch("https://fakestoreapi.com/products/categories").then((res) => res.json()),
    ])
      .then(([productsData, categoriesData]) => {
        setAllProducts(productsData);
        setFilteredProducts(productsData); // Awalnya tampilkan semua
        setCategories(categoriesData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal mengambil data:", err);
        setLoading(false);
      });
  }, []);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    if (category === "Semua") {
      setFilteredProducts(allProducts);
    } else {
      const filtered = allProducts.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  if (loading) return <h2 className="loading-text">Loading produk...</h2>;

  return (
    <div className="products-container">
      <h2>Produk Kami</h2>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p className="price">
              Rp {(product.price * 16000).toLocaleString("id-ID")}
            </p>
            <p className="desc">{product.description}</p>
            <button>Tambah ke Keranjang</button>
            <Link to={`/products/${product.id}`} className="detail-link">
              Lihat Detail
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
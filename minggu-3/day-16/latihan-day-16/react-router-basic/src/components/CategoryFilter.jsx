import React from 'react';
import './CategoryFilter.css';

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  // Menambahkan "Semua" ke awal daftar kategori
  const filterCategories = ['Semua', ...categories];

  return (
    <div className="category-filter-container">
      {filterCategories.map((category) => (
        <button
          key={category}
          className={`filter-button ${
            selectedCategory === category ? 'active' : ''
          }`}
          onClick={() => onSelectCategory(category)}
        >
          {/* Mengubah format teks menjadi lebih rapi, cth: "men's clothing" -> "Men's Clothing" */}
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
import React from 'react';

function ProductList({ products }) {
  return (
    <div>
      <h2>Daftar Produk</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - Rp{product.price.toLocaleString('id-ID')}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;

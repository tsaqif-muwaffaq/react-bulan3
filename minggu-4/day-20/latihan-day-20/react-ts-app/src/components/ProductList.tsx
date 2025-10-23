import React from "react";

export interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

interface ProductListProps {
  products: Product[];
  onSelect: (id: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onSelect }) => {
  return (
    <ul>
      {products.map(p => (
        <li key={p.id}>
          {p.name} - Rp{p.price.toLocaleString()}{" "}
          <button onClick={() => onSelect(p.id)} disabled={!p.inStock}>
            {p.inStock ? "Beli" : "Habis"}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;

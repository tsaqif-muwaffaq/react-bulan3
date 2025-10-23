import React from "react";
import UserCard from "../components/UserCard";
import Counter from "../components/Counter";
import ProductList from "../components/ProductList";
import CustomForm from "../components/CustomForm";

const sampleProducts = [
  { id: 1, name: "Nasi Goreng", price: 25000, inStock: true },
  { id: 2, name: "Es Teh", price: 8000, inStock: true },
  { id: 3, name: "Martabak", price: 40000, inStock: false }
];

const Home: React.FC = () => {
  const handleSelect = (id: number) => {
    const p = sampleProducts.find(x => x.id === id);
    console.log("Selected product:", p);
    alert(`Produk dipilih: ${p?.name ?? "Unknown"}`);
  };

  return (
    <div>
      <div className="card">
        <h2>Home</h2>
        <p>Contoh implementasi komponen dan TypeScript patterns.</p>
      </div>

      <UserCard name="Tsaqif" age={21} email="tsaqifmuwaffaq@gmail.com" status="IN_PROGRESS" hobbies={["desain","fotografi"]} />

      <div className="card">
        <h3>Counter</h3>
        <Counter initialCount={0} step={1} />
      </div>

      <div className="card">
        <h3>ProductList</h3>
        <ProductList products={sampleProducts} onSelect={handleSelect} />
      </div>

      <div className="card">
        <h3>Form</h3>
        <CustomForm />
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "129.99",
      inStock: true,
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      price: "89.99",
      inStock: false,
    },
    {
      id: 3,
      name: "Smart Watch",
      price: "199.99",
      inStock: true,
    },
  ];

  return (
    <div className="container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          inStock={product.inStock}
        />
      ))}
    </div>
  );
}

export default App;

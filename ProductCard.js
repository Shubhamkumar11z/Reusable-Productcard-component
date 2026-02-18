import React from "react";
import "./ProductCard.css";

function ProductCard({ name, price, inStock }) {
  return (
    <div className="card">
      <div className="image-placeholder"></div>

      <h2>{name}</h2>
      <p className="price">${price}</p>

      <span className={`stock ${inStock ? "in" : "out"}`}>
        {inStock ? "In Stock" : "Out of Stock"}
      </span>
    </div>
  );
}

export default ProductCard;

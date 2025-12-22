import React from "react";
import Cards from "./Cards";
import styles from "./Products.module.css";
const Products = () => {
  const products = [
    {
      id: 1,
      name: "Eco-Friendly Laptop",
      price: 60000,
      category: "Electronics",
      image: "https://via.placeholder.com/300x200?text=Laptop",
      description: "Energy-efficient laptop with sustainable materials.",
    },
    {
      id: 2,
      name: "Organic Mobile Phone",
      price: 25000,
      category: "Electronics",
      image: "https://via.placeholder.com/300x200?text=Mobile",
      description: "Low-radiation smartphone with eco packaging.",
    },
    {
      id: 3,
      name: "Recycled Headphones",
      price: 3000,
      category: "Accessories",
      image: "https://via.placeholder.com/300x200?text=Headphones",
      description: "Headphones made using recycled plastic materials.",
    },
  ];

  return (
    <div className={styles.products}>
      {products.map((data, index) => (
        <Cards data={data} index={index} />
      ))}
    </div>
  );
};

export default Products;

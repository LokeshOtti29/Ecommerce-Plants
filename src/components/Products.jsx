import React from "react";
import Cards from "./Cards";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 60000,
      category: "Electronics",
    },
    {
      id: 2,
      name: "Mobile Phone",
      price: 25000,
      category: "Electronics",
    },
    {
      id: 3,
      name: "Headphones",
      price: 3000,
      category: "Accessories",
    },
  ];

  return (
    <div>
      {products.map((data, index) => {
        <Cards data={data} index={index} />;
      })}
    </div>
  );
};

export default Products;

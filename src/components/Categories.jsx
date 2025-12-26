import React from "react";
import { products } from "./Products";
import styles from "./Products.module.css";
import Cards from "./Cards";
const Categories = () => {
  return (
    <div className={styles.products}>
      {products.map((data, index) => (
        <Cards data={data} index={index} />
      ))}
    </div>
  );
};

export default Categories;

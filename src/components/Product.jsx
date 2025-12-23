import React from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { products } from "./Products";
import styles from "./Product.module.css";

const Product = () => {
  const { id } = useParams();
  const product = products.find((data) => data.id === Number(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <div className={styles.productcard}>
        <div className={styles.productImage}>
          <img src={product.image} alt={product.title} />
        </div>

        <div className={styles.productDetails}>
          <div className={styles.productTitle}>{product.name}</div>

          <div className={styles.productPrice}>₹{product.price}</div>

          <div className={styles.productActions}>
            <button className={styles.productButton}> Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

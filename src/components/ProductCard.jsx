import React from "react";
import styles from "./ProductCard.module.css";
const ProductCard = ({ data, index }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageBox}>
        <img src={data.image} alt={data.name} />
      </div>

      <div className={styles.content}>
        <div className={styles.info}>
          <span className={styles.name}>{data.name}</span>
          <span className={styles.description}>{data.description}</span>
        </div>

        <div className={styles.quantity}>
          <button>+</button>
          <button>-</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

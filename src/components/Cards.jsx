import React from "react";
import styles from "./Cards.module.css";

const Cards = ({ data, index }) => {
  return (
    <div className={styles.card} key={index}>
      <div className={styles.imageBox}>
        <img src={data.image} alt={data.name} />
      </div>

      <div className={styles.content}>
        <div className={styles.title}>{data.name}</div>
        <div className={styles.price}>₹{data.price}</div>
      </div>

      <div className={styles.actions}>
        <button>View Product</button>
      </div>
    </div>
  );
};

export default Cards;

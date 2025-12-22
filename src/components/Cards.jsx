import React, { use } from "react";
import styles from "./Cards.module.css";
import { useNavigate } from "react-router-dom";
const Cards = ({ data, index }) => {
  const navigate = useNavigate();
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
        <button onClick={() => navigate(`/product/${data.id}`)}>
          View Product
        </button>
      </div>
    </div>
  );
};

export default Cards;

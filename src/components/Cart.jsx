import React from "react";
import { products } from "./Products";
import styles from "./Cart.module.css";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartItems}>
        {products.map((data, index) => (
          <div key={index} className={styles.cartItem}>
            <ProductCard data={data} />
          </div>
        ))}
      </div>

      <div className={styles.priceContainer}>
        <h3 className={styles.priceTitle}>Price Details</h3>

        <div className={styles.priceRow}>
          <span>Price</span>
          <span>₹0</span>
        </div>

        <div className={styles.priceRow}>
          <span>Delivery</span>
          <span>Free</span>
        </div>

        <div className={`${styles.priceRow} ${styles.total}`}>
          <span>Total</span>
          <span>₹0</span>
        </div>

        <button
          className={styles.placeOrderBtn}
          onClick={() => navigate("/Payment")}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;

import React from "react";
import styles from "./Payment.module.css";

const Payment = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Delivery</h2>

      <form className={styles.form}>
        <div className={styles.field}>
          <label>Country/Region</label>
          <select>
            <option>India</option>
          </select>
        </div>

        <div className={styles.row}>
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>

        <input type="text" placeholder="Address" />

        <div className={styles.row3}>
          <input type="text" placeholder="City" />
          <select>
            <option>Maharashtra</option>
          </select>
          <input type="text" placeholder="PIN code" />
        </div>

        <input type="text" placeholder="Phone" />

        <div className={styles.checkbox}>
          <input type="checkbox" />
          <span>Save this information for next time</span>
        </div>

        <button className={styles.button}>Order</button>
      </form>
    </div>
  );
};

export default Payment;

import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.section}>
          <h3>EcoMart</h3>
          <p>
            Your one-stop destination for eco-friendly and sustainable products.
          </p>
        </div>

        <div className={styles.section}>
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Categories</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4>Contact Us</h4>
          <p>Email: support@ecomart.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>

      <div className={styles.bottomBar}>
        {new Date().getFullYear()} EcoMart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

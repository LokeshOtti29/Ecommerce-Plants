import React from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.headerContainer}>
      <div className={styles.topBar}>
        <div className={styles.logo}>EcoMart</div>

        <div className={styles.search}>
          <span>
            <input type="text" placeholder="Search products..." />
          </span>
          <span>
            <button>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </span>
        </div>

        <div className={styles.auth}>
          <div>
            <i
              className="fa-solid fa-user"
              onClick={() => navigate("/account/login")}
            ></i>
          </div>
          <div>
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </div>
          <div>
            <i
              class="fa-solid fa-cart-arrow-down"
              onClick={() => navigate("/cart")}
            ></i>
          </div>
        </div>
      </div>

      <div className={styles.navBar}>
        <div className={styles.navbarlist}>
          <li className={styles.navList}>Home</li>

          <li className={`${styles.navList} ${styles.dropdown}`}>
            Plants
            <ul className={styles.menu}>
              <li>Indoor</li>
              <li>Outdoor</li>
              <li>Flowering</li>
            </ul>
          </li>

          <li className={`${styles.navList} ${styles.dropdown}`}>
            Seeds
            <ul className={styles.menu}>
              <li>Vegetable</li>
              <li>Flower</li>
              <li>Herb</li>
            </ul>
          </li>

          <li className={`${styles.navList} ${styles.dropdown}`}>
            Pots & Planters
            <ul className={styles.menu}>
              <li>Plastic</li>
              <li>Ceramic</li>
              <li>Hanging</li>
            </ul>
          </li>

          <li className={styles.navList}>Contact Us</li>
        </div>
      </div>
      <div className={styles.cityBar}></div>
    </div>
  );
};

export default Header;

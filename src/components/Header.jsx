import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.topBar}>
        <div className={styles.logo}>EcoMart</div>

        <div className={styles.search}>
          <input type="text" placeholder="Search products..." />
        </div>

        <div className={styles.auth}>
          <div>
            <i className="fa-solid fa-user"></i>
          </div>
          <div>
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </div>
        </div>
      </div>

      <div className={styles.navBar}>
        <div className={styles.navbarlist}>
          <li className={styles.navList}>Home</li>
          <li className={styles.navList}>About</li>
          <li className={styles.navList}>Contact</li>
          <li className={styles.navList}>Categories</li>
        </div>
      </div>
      <div className={styles.cityBar}></div>
    </div>
  );
};

export default Header;

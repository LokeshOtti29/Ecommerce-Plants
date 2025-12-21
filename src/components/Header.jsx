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
            <i class="fa-solid fa-user"></i>
          </div>
          <div>Signout</div>
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
    </div>
  );
};

export default Header;

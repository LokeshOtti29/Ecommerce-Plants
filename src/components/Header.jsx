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
              onClick={() => navigate("/login")}
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
          <li className={styles.navList} onClick={() => navigate("/")}>
            Home
          </li>
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

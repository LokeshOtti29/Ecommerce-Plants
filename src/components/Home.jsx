import React from "react";
import Header from "./Header";
import Products from "./Products";
import Footer from "./Footer";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.header}>
        <Header />
      </div>

      <div className={styles.products}>
        <Products />
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;

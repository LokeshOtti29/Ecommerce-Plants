import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.cityBar}></div>
      <div className={styles.footerContent}>
        <div className={styles.column}>
          <h4>ABOUT US</h4>
          <p>Our Story</p>
          <p>Contact Us</p>
          <p>Careers</p>
          <p>Locate Stores</p>
          <p>Own Grown</p>
          <p>Garden Services & Maintenance</p>
        </div>

        <div className={styles.column}>
          <h4>CUSTOMER CARE</h4>
          <p>Take The Plant Quiz</p>
          <p>Shipping Policy</p>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Track Order</p>
          <p>FAQs</p>
          <p>Order Related Policy</p>
        </div>

        <div className={styles.column}>
          <h4>OFFERS & REWARDS</h4>
          <p>Plant Parent Rewards Club</p>
          <p>EcoMart Coupons</p>
        </div>

        <div className={styles.column}>
          <h4>GET IN TOUCH</h4>
          <p>WhatsApp us at: 709099999</p>
          <p>Call: +91-9129555555</p>
          <p>Email: support@ecomart.com</p>
        </div>

        <div className={styles.column}>
          <h4>SIGN UP FOR OUR NEWSLETTER</h4>
          <input
            type="email"
            placeholder="Enter email address"
            className={styles.emailInput}
          />
          <p className={styles.note}>
            For plant care tips, exclusive offers and discounts.
          </p>

          <h4 className={styles.follow}>FOLLOW US</h4>
          <div className={styles.socials}>
            <span>FB</span>
            <span>X</span>
            <span>IG</span>
            <span>IN</span>
            <span>YT</span>
          </div>

          <h4 className={styles.app}>Download App!</h4>
          <div className={styles.apps}>
            <button>Google Play</button>
            <button>App Store</button>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>© 2025, EcoMart. All rights reserved.</div>
    </footer>
  );
};

export default Footer;

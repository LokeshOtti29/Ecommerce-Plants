import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginCard}>
        <h2 className={styles.heading}>Login</h2>

        <p className={styles.subText}>
          Don&apos;t have an account yet?{" "}
          <span className={styles.link}>Create account</span>
        </p>

        <div className={styles.socialButtons}>
          <button className={styles.facebook}>
            <i className="fa-brands fa-facebook-f"></i> Facebook
          </button>
          <button className={styles.google}>
            <i className="fa-brands fa-google"></i> Google
          </button>
        </div>

        <div className={styles.inputGroup}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>

        <p className={styles.forgot}>Forgot your password?</p>

        <button className={styles.signInBtn}>SIGN IN</button>

        <p className={styles.return} onClick={() => navigate("/")}>
          Return to Store
        </p>
      </div>
    </div>
  );
};

export default Login;

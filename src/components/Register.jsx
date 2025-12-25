import React from "react";
import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h2 className={styles.heading}>Create Account</h2>

        <div className={styles.socialButtons}>
          <button className={styles.facebook}>
            <i className="fa-brands fa-facebook-f"></i> Facebook
          </button>
          <button className={styles.google}>
            <i className="fa-brands fa-google"></i> Google
          </button>
        </div>

        <div className={styles.inputGroup}>
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>

        <button className={styles.createBtn}>CREATE</button>

        <p className={styles.return} onClick={() => navigate("/")}>
          Return to Store
        </p>
      </div>
    </div>
  );
};

export default Register;

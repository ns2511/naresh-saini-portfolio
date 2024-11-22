import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer>
      <div className={styles.Container}>
        <div>
          <h2>
            Designed and Developed by <a href="/">Naresh Saini</a>
          </h2>
        </div>
        <div>Copyright © 2024 Naresh S</div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;

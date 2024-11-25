import React from "react";
import styles from "./Footer.module.css";
import ConnectStick from "../ConnectStick/ConnectStick";
const Footer = () => {
  return (
    <div>
      <ul className={styles.container}>
      <p className={styles.text}>Follow Me</p>
        
        <li className={styles.allLinks}>
          <a
            target="_blank"
            href="https://linkedin.com/in/naresh-saini-profile/"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a target="_blank" href="https://github.com/ns2511">
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <a target="_blank" href="mailto:naresh.saini2511@gmail.com">
            <ion-icon name="mail-outline"></ion-icon>
          </a>
          <a target="_blank" href="https://www.instagram.com/naresh.saini.010/">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;

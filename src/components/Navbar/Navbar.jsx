import React from "react";
import Menu from '../Menu/Menu';
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Theme from "../Theme/Theme";


const Navbar = () => {

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
        <ion-icon name="color-palette-outline"></ion-icon>
        
        </li>

        <li className={styles.navbarItem}>
          <Menu/>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React from "react";
import styles from "./MenuBar.module.css";
import { NavLink } from "react-router-dom";

const MenuBar = ({setIsMenuOpen}) => {
  return (
    <div className={styles.menubar}>
      <ul className={styles.menubarList}>
        <li className={styles.menubarItem}>
          <NavLink
          onClick={()=>setIsMenuOpen(false)}
            to="/"
            className={({ isActive }) =>
              `${styles.menubarLink} ${isActive ? styles.active : ""}`
            }
          >
            Home
          </NavLink>
        </li>
        <li className={styles.menubarItem}>
          <NavLink
          onClick={()=>setIsMenuOpen(false)}
            to="/aboutme"
            className={({ isActive }) =>
              `${styles.menubarLink} ${isActive ? styles.active : ""}`
            }
          >
            About Me
          </NavLink>
        </li>
        <li className={styles.menubarItem}>
          <NavLink
          onClick={()=>setIsMenuOpen(false)}
            to="/portfolio"
            className={({ isActive }) =>
              `${styles.menubarLink} ${isActive ? styles.active : ""}`
            }
          >
            Portfolio
          </NavLink>
        </li>

        <li className={styles.menubarItem}>
          <NavLink
            onClick={()=>setIsMenuOpen(false)}
            to="/contact"
            className={({ isActive }) =>
              `${styles.menubarLink} ${isActive ? styles.active : ""}`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MenuBar;

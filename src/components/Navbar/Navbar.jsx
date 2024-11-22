import React, { useState } from "react";

import styles from "./Navbar.module.css";
import Theme from "../Settings/SettingsItems/Theme";
import Settings from "../Settings/Settings";
import Menu from "../Menu/Menu";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <NavLink >
            <Settings
              isSettingsOpen={isSettingsOpen}
              setIsSettingsOpen={setIsSettingsOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
          </NavLink>
        </li>

        <li className={styles.navbarItem}>
          <NavLink>
            <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} setIsSettingsOpen={setIsSettingsOpen} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

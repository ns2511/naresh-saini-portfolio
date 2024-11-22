import React, { useContext, useState } from "react";
import styles from "./SettingsMenu.module.css";
import Theme from "../SettingsItems/Theme";
import FontStyle from "../SettingsItems/FontStyle";
import FontSize from "../SettingsItems/FontSize";
import FontWidth from "../SettingsItems/FontWidth";
import { NavLink } from "react-router-dom";

const SettingsMenu = () => {
  
  const resetAll = () => {
    document.querySelector("body").setAttribute("data-font-size", "normal");

    document.querySelector("body").setAttribute("data-font-width", "normal");

    root.style.setProperty("--font-dynamic", "var(--font-roboto)");
  };
  
  return (
  
      <div className={styles.settingsContainer}>
        <ul className={styles.settingsList}>
          <li className={styles.settingsItem}>
            <NavLink to="/settings/theme"  className={`${styles.settingsLink}`}>
              Theme
            </NavLink>
          </li>

          <li className={styles.settingsItem}>
            <NavLink to="/settings/font-style"  className={`${styles.settingsLink}`}>
              Font Style
            </NavLink>
          </li>
          <li className={styles.settingsItem}>
            <NavLink to="/settings/font-size"  className={`${styles.settingsLink}`}>
              Font Size
            </NavLink>
          </li>
          <li className={styles.settingsItem}>
            <NavLink to="/settings/font-width"  className={`${styles.settingsLink}`}>
              Font Width
            </NavLink>
          </li>
          
          <li className={styles.settingsItem}>
            <a onClick={resetAll} className={`${styles.settingsLink}`}>
              Reset Default
            </a>
          </li>
        </ul>
      </div>
   
  );
};

export default SettingsMenu;

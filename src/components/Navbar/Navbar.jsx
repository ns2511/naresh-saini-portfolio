import React, { useState, useEffect } from "react";
import Menu from "../Menu/Menu";
import styles from "./Navbar.module.css";
import Theme from "../Theme/Theme";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../features/themeSlice";

const Navbar = () => {
  
  const isVisible = useSelector((state)=>state.theme.isVisible);
  const dispatch = useDispatch();
  const handleVisible = (e) => {
    e.stopPropagation();
    dispatch(toggleTheme());
  };


  // const hideTheme = () => {
  //   setIsThemeVisible(false);
  // };

  // useEffect(() => {
  //   if (isThemeVisible) {
  //     document.body.addEventListener("click", hideTheme);
  //   } else {
  //     document.body.removeEventListener("click", hideTheme);
  //   }

  //   return () => {
  //     document.body.removeEventListener("click", hideTheme);
  //   };
  // }, [isThemeVisible]);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <button
            onClick={handleVisible}
          >
            <ion-icon name="color-palette-outline"></ion-icon>
          </button>
          {isVisible && <Theme />}
        </li>

        {/* Menu */}
        <li className={styles.navbarItem}>
          <Menu />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

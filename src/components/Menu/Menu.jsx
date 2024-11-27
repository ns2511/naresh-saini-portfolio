import React, { useState } from "react";
import MenuBar from "./MenuBar/MenuBar";
import { useNavigate } from "react-router";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = useNavigate();
  const toggleMenu = () => {
    const updateMenu = isMenuOpen ? false : true;
    console.log("menu icon clicked");
    setIsMenuOpen(updateMenu);
  };
  return (
    <>
      <button
        style={{ transform: isMenuOpen ? "rotate(90deg)" : "rotate(0deg)" }}
        onClick={toggleMenu}
      >
        <ion-icon
          name={isMenuOpen ? "close-outline" : "menu-outline"}
        ></ion-icon>
      </button>
      {isMenuOpen && <MenuBar  setIsMenuOpen={setIsMenuOpen}/>}
    </>
  );
};

export default Menu;

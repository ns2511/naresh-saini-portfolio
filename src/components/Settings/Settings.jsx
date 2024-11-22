import React, { useState } from "react";
import SettingsMenu from "./SettingsMenu/SettingsMenu";
import { useNavigate } from "react-router";

const Settings = ({isSettingsOpen,setIsSettingsOpen,setIsMenuOpen}) => {
  const navigation=useNavigate();
  const toggleSettings = () => {
    const updateSettings = isSettingsOpen ? false : true;
    console.log("Settings icon clicked");
    setIsMenuOpen(false);
    isSettingsOpen?navigation('/'):"";
    setIsSettingsOpen(updateSettings);
  };
  
  return (
    <>
      <button
        style={{ transform: isSettingsOpen ? "rotate(60deg)" : "rotate(0deg)" }}
        onClick={toggleSettings}
      >
        <ion-icon  name="settings-outline"></ion-icon>
      </button>

      {isSettingsOpen && <SettingsMenu  />}
    </>
  );
};

export default Settings;

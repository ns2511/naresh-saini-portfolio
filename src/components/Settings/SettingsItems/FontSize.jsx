import React from "react";
import styles from './SettingsItems.module.css';
const FontSize = () => {
    
  const small=()=>{
    document.querySelector("body").setAttribute("data-font-size", "small");
  }
  const normal=()=>{
    document.querySelector("body").setAttribute("data-font-size", "normal");
  }
  const large=()=>{
    document.querySelector("body").setAttribute("data-font-size", "large");
  }
  return (
    <div className={styles.selectionContainer}>
      <div className={styles.wrap}>
      <button onClick={small}  className={`${styles.itemBtn} ${styles.small}`}>Small</button>
      <button onClick={normal} className={`${styles.itemBtn}`}>Normal</button>
      <button onClick={large} className={`${styles.itemBtn} ${styles.large}`}>Large</button>
      </div>
    </div>
  );
};

export default FontSize;

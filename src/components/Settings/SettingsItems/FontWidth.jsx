import React from "react";
import styles from "./SettingsItems.module.css";
const FontWidth = () => {
  const narrow = () => {
    document.querySelector("body").setAttribute("data-font-width", "narrow");
  };
  const normal = () => {
    document.querySelector("body").setAttribute("data-font-width", "normal");
  };
  const wide = () => {
    document.querySelector("body").setAttribute("data-font-width", "wide");
  };

  return (
    <div className={styles.selectionContainer}>
      <div className={styles.wrap}>
      <button onClick={narrow} className={`${styles.itemBtn} ${styles.narrow}`}>
        Narrow
      </button>
      <button onClick={normal} className={`${styles.itemBtn}`}>
        Normal
      </button>
      <button onClick={wide} className={`${styles.itemBtn} ${styles.wide}`}>
        Wide
      </button>
      </div>
    </div>
  );
};

export default FontWidth;

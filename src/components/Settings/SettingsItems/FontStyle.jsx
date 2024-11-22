import React from "react";
import styles from "./SettingsItems.module.css";
const FontStyle = () => {
  const changeFont = (fontName) => {
    const root = document.documentElement;

    if (fontName === 'roboto') {
      root.style.setProperty('--font-dynamic', 'var(--font-roboto)');
    } else if (fontName === 'vazirmatn') {
      root.style.setProperty('--font-dynamic', 'var(--font-vazirmatn)');
    }
  };

  return (
    <div className={styles.selectionContainer}>
      <div className={styles.wrap}>
      <button onClick={()=>changeFont('roboto')} className={styles.itemBtn} style={{fontFamily:"var(--font-roboto)",}}>
        Roboto
      </button>
      <button onClick={()=>changeFont('vazirmatn')} className={styles.itemBtn} style={{fontFamily:"var(--font-vazirmatn)"}}>
        Vazirmatn
      </button>
      </div>
    </div>
  );
};

export default FontStyle;

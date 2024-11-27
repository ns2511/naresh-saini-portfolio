import React from "react";
import styles from "./Resume.module.css";
const Resume = () => {
  return (
    <button className={styles.resumeBtn} type="submit">
      <ion-icon name="download-outline"></ion-icon>
      <span></span>
    </button>
  );
};

export default Resume;

import React from "react";
import styles from "./Resume.module.css";
import resume from "../../Naresh_Saini_Resume_full_stack.pdf";
const Resume = () => {
  return (
    <a href={resume}  className={styles.resumeBtn} type="submit">
      <ion-icon name="download-outline"></ion-icon>
      <span></span>
    </a>
  );
};

export default Resume;

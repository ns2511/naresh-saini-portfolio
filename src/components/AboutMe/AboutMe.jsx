import { div } from "framer-motion/client";
import React from "react";
import styles from "./AboutMe.module.css";
const About = () => {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.heading}></div>
        <div className={styles.container}>
          <div className={styles.intro}>
            <div className={styles.title}>
              <h3>Abit About me</h3>
            </div>
            <div className={styles.itemContainer}>
              intro me macbook wala terminal chipkana h <hr />
            </div>
          </div>
          <div className={styles.education}>
            <div className={styles.title}>
              <h3>Education</h3>
            </div>
            <div className={styles.itemContainer}>
              education chipkani h <hr />
            </div>
          </div>
          <div className={styles.skills}>
            <div className={styles.title}>
              <h3>Skills</h3>
            </div>
            <div className={styles.itemContainer}>
              skills chipkani h <hr />
            </div>
          </div>
          <div className={styles.services}>
            <div className={styles.title}>
              <h3>Coding Profiles</h3>
            </div>
            <div className={styles.itemContainer}>
              Leetcode ke stets chipkana h yha api bna ke
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

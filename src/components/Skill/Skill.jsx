import React from 'react';
import styles from './Skill.module.css';

const Skill = ({ skillName, progress }) => {
  return (
    <div className={styles.skillContainer}>
      <div className={styles.skillInfo}>
        <span className={styles.skillName}>{skillName}</span>
        <span className={styles.progressPercent}>{progress}%</span>
      </div>
      <div className={styles.progressBar}>
        <div
          className={styles.progress}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Skill;

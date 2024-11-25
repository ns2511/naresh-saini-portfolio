import React from "react";
import styles from "./MacTerminal.module.css";

const MacTerminal = ({ infos }) => {
  return (
    <div className={styles.terminalContainer}>
      <div className={styles.terminalHeader}>
        <div className={styles.trafficLights}>
          <span className={styles.red}></span>
          <span className={styles.yellow}></span>
          <span className={styles.green}></span>
        </div>
      </div>
      <div className={styles.terminalBody}>
        {infos.map((info, index) => (
          <div key={index} className={styles.terminalEntry}>
            <p>
              <span className={styles.prompt}>{info.prompt}</span>{" "}
              <span className={styles.command}>{info.command}</span>
            </p>
            <div className={styles.output}>{info.output}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MacTerminal;

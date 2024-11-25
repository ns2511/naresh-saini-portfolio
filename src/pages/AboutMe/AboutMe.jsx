import React from "react";
import styles from "./AboutMe.module.css";
import Skill from "../../components/Skill/Skill";

const AboutMe = () => {
  return (
    <div className={styles.container} data-page="resume">
      <div>
        <h2 className={styles.articleTitle}>Resume</h2>
      </div>

      <div className={styles.timeline}>
        <div className={styles.titleWrapper}>
          <div className={styles.iconBox}>
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3>Education</h3>
        </div>

        <ol className={styles.timelineList}>
          <li className={styles.timelineItem}>
            <h4 className={styles.timelineItemTitle}>
              Govt. Engineering College, Ajmer
            </h4>

            <span>7.7/10.0 cgpa</span>

            <p className={styles.timelineText}>
              I completed B.Tech. from GECA in the field of{" "}
              <b>Computer Science and Engineering</b> with an agregate cgpa of
              7.7 in <b>2023</b>.
            </p>
          </li>

          <li className={styles.timelineItem}>
            <h4 className={styles.timelineItemTitle}>
              N.K. Public Sr. Sec. School, Murlipura Jaipur
            </h4>

            <span>82.80%</span>

            <p className={styles.timelineText}>
              I completed my senior school in the field of physics, chemistry
              and Mathematics from Nkps Murlipura Jaipur with precentage of
              82.80% in 2017.
            </p>
          </li>

          <li className={styles.timelineItem}>
            <h4 className={styles.timelineItemTitle}>
              Tagore Plus Sec. School, jaipur
            </h4>

            <span>83%</span>

            <p className={styles.timelineText}>
              I completed my junior School from TPS school jaipur with
              precentage of 83% in 2015.
            </p>
          </li>
        </ol>
      </div>

      <div className={styles.skillsWrap}>
        <div className={styles.titleWrapper}>
          <div className={styles.iconBox}>
            <ion-icon name="medal-outline"></ion-icon>
          </div>

          <h3>Skills</h3>
        </div>
        <div className={styles.allSkills}>
          <Skill skillName="Java" progress={85} />
          <Skill skillName="ReactJS" progress={90} />
          <Skill skillName="DSA" progress={70} />
          <Skill skillName="DBMS" progress={90} />
          <Skill skillName="MySQL" progress={90} />
          <Skill skillName="HTML5" progress={85} />
          <Skill skillName="CSS3" progress={90} />
          <Skill skillName="JavaScript" progress={75} />
          <Skill skillName="MongoDB" progress={80} />
          <Skill skillName="SpringBoot" progress={60} />
        </div>
      </div>

      <div className={styles.intro}>
        <div className={styles.titleWrapper}>
          <div className={styles.iconBox}>
            <ion-icon name="code-slash-outline"></ion-icon>
          </div>

          <h3>
            Coding Profiles{" "}
            <span
              style={{
                fontSize: "var(--fs-8)",
                color: "var(--sub-color)",
                display: "block",
                position: "absolute",
              }}
            >
              (Note:- real-time data through api will be posted in a few days.)
            </span>
          </h3>
        </div>
        <div className={styles.codingProfilesWrap}>
         
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

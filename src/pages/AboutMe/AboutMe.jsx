import React from "react";
import styles from "./AboutMe.module.css";
import Skill from "../../components/Skill/Skill";
import Resume from "../../components/Resume/Resume";

const AboutMe = () => {
  return (
    <div className={styles.container} data-page="resume">
      <div>
        <h2 className={styles.articleTitle}>Resume</h2>
      </div>

      {/* Experience  */}
      <div className={styles.timeline}>
        <div className={styles.titleWrapper}>
          <div className={styles.iconBox}>
            <ion-icon name="bag-handle-outline"></ion-icon>
          </div>

          <h3>Experience</h3>
        </div>

        <ol className={styles.timelineList}>
          <li className={styles.timelineItem}>
            <h4 className={styles.timelineItemTitle}>
              Cyntexa labs pvt. ltd. IT Park, Jaipur
            </h4>

            <span>Associate Software Developer</span>
            <span>January 2025 – Present</span>

            <p className={styles.timelineText}>
              Working in the Salesforce cloud ecosystem, proficient in Admin,
              Apex, SOQL, LWC, and API integrations, delivering efficient and
              scalable Salesforce solutions for business needs in a corporate
              environment.
            </p>
          </li>
        </ol>
      </div>
      {/* education   */}
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
          
  {/* Salesforce Skills */}
  <Skill skillName="Salesforce Admin" progress={95} />
  <Skill skillName="Apex" progress={95} />
  <Skill skillName="SOQL" progress={95} />
  <Skill skillName="LWC (Lightning Web Components)" progress={90} />
  <Skill skillName="Salesforce Flows" progress={90} />
  <Skill skillName="API Integration" progress={85} />
<hr />
<br />
  {/* Web & Programming Skills */}
  <Skill skillName="JavaScript" progress={85} />
  <Skill skillName="HTML5" progress={85} />
  <Skill skillName="CSS3" progress={90} />
  <Skill skillName="Java" progress={90} />
  <Skill skillName="ReactJS" progress={95} />
  <hr />
  <br />
  {/* CS Fundamentals */}
  <Skill skillName="DSA (Data Structures & Algorithms)" progress={75} />
  <Skill skillName="Operating Systems" progress={70} />
  <Skill skillName="DBMS" progress={85} />
  <Skill skillName="MySQL" progress={85} />
<hr />
<br />
  {/* Tools */}
  <Skill skillName="Git & GitHub" progress={80} />
</div>

      </div>

      <div className={styles.codingContainer}>
        <div className={styles.titleWrapper}>
          <div className={styles.iconBox}>
            <ion-icon name="code-slash-outline"></ion-icon>
          </div>

          <h3>
            Coding Profiles{" "}
            {/* <span
              style={{
                fontSize: "var(--fs-8)",
                color: "var(--sub-color)",
                display: "block",
                position: "absolute",
              }}
            >
              (Note:- real-time data through api will be posted in a few days.)
            </span> */}
          </h3>
        </div>
        <div className={styles.codingProfilesWrap}></div>
      </div>
      <Resume />
    </div>
  );
};

export default AboutMe;

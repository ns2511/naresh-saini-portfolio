import React from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrap}>
          <div className={styles.homeInfo}>
            <h2>I'm Naresh Saini</h2>

            <div className={styles.typewriter}>
              <span className={styles.typewriterContent}></span>
              <span className={styles.typewriterCursor}>|</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem modi beatae, sit pariatur quae inventore voluptas
              quibusdam corrupti fugiat? Ipsum repellendus at non, nemo aliquam
              totam corrupti labore obcaecati sint.
            </p>
          </div>
          <div className={styles.contactInfo}>
            <div>
              <a onClick={()=>navigate('/aboutme')}>About Me</a>
            </div>
            <div>
              <a onClick={()=>navigate('/portfolio')}>My Portfolio</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

import React from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router";
import Typewriter from "../../components/Typewriter/Typewriter";
import hello from "../../assets/images/developer.png";
import MacTerminal from "../../components/MacTerminal/MacTerminal";
const Home = () => {
  const infos = [
    {
      prompt: "Portfolio/Home",
      command: "show Intro",
      output: (
        <p>
          I turn ideas into digital realities by crafting innovative,
          responsive, and visually stunning web experiences that seamlessly
          blend creativity and functionality to deliver modern solutions that
          truly stand out.
        </p>
      ),
    },
    {
      prompt: "Portfolio/Home",
      command: "show Email",
      output: (
        <a
          
          href="mailto:naresh.saini2511@gmail.com"
        >
          naresh.saini2511@gmail.com
        </a>
      ),
    },
    {
      prompt: "Portfolio/Home",
      command: "show Address",
      output: <p>Jaipur,India - 302012</p>,
    },
  ];
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrap}>
          <div className={styles.greetings}>
            <div className={styles.greetImgContainer}>
              <img src={hello} alt="#" />
            </div>
            <h1 style={{ color: "var(--main-color)" }}>I'm Naresh Saini</h1>
            <div className={styles.typewriter}>
              <Typewriter />{" "}
            </div>

            <div className={styles.contactInfo}>
              <div>
                <a onClick={() => navigate("/aboutme")}>About Me</a>
              </div>
              <div>
                <a onClick={() => navigate("/portfolio")}>My Portfolio</a>
              </div>
            </div>
          </div>
          <div className={styles.info}>
          <MacTerminal infos={infos} />

            
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

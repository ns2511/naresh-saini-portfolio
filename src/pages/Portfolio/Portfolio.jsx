import React from "react";
import styles from "./Portfolio.module.css";
import portfolioImg from '../../assets/images/portfolio.png';
import newsappImg from '../../assets/images/newsapp.png';
import snakegameImg from '../../assets/images/snakegame.png';

const projects = [
  {
    title: "Portfolio web application",
    url: "/",
    category: "ReactJS",
    imgUrl: portfolioImg,
    description: "A responsive portfolio showcasing my projects and skills.",
  },
  {
    title: "Around The World - News App",
    url: "https://github.com/ns2511/Around-The-World",
    category: "ReactJS",
    imgUrl: newsappImg,
    description: "A news aggregator app that displays category wise news as well as latest headlines.",
  },
  {
    title: "Classic Snake Game",
    url: "#",
    category: "Java",
    imgUrl: snakegameImg,
    description: "A recreation of the classic Snake game using Java.",
  },
];

const Projects = () => {
  return (
    <div className={styles.portfolio} data-page="portfolio">
      <div>
        <h2 className={styles.articleTitle}>Portfolio</h2>
      </div>

      <div className={styles.projects}>
        <ul className={styles.projectList}>
          {projects.map((project) => (
            <li
              key={project.title}
              className={styles.projectItem}
              data-filter-item
              data-category={project.category.toLowerCase()}
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <figure className={styles.projectImg}>
                  <div className={styles.projectItemIconBox}>
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img
                    src={project.imgUrl}
                    alt={project.title}
                    loading="lazy"
                  />
                </figure>

                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectCategory}>{project.category}</p>
                <p className={styles.projectDescription}>{project.description}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;

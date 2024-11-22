import React from 'react'
import styles from './Portfolio.module.css';

const Projects = () => {
  return (
    <div className="portfolio" data-page="portfolio">

        <div>
          <h2 className="h2 article-title">Portfolio</h2>
        </div>

        <div className="projects">

          <ul className="filter-list">

            <li className="filter-item">
              <button className="active" data-filter-btn>All</button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>Java</button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>Web development</button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>Machine Learning</button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>Python</button>
            </li>

          </ul>

          <div className="filter-select-box">

            <button className="filter-select" data-select>

              <div className="select-value" data-selecct-value>Select category</div>

              <div className="select-icon">
                <ion-icon name="chevron-down"></ion-icon>
              </div>

            </button>

            <ul className="select-list">

              <li className="select-item">
                <button data-select-item>All</button>
              </li>

              <li className="select-item">
                <button data-select-item>Java</button>
              </li>

              <li className="select-item">
                <button data-select-item>Web development</button>
              </li>

              <li className="select-item">
                <button data-select-item>Machine Learning</button>
              </li>

              <li className="select-item">
                <button data-select-item>Python</button>
              </li>

            </ul>

          </div>

          <ul className="project-list">

            <li className="project-item  active" data-filter-item data-category="web development">
              <a href="https://nareshsaini.com/">

                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src="./assets/images/project-1.png" alt="finance" loading="lazy"/>
                </figure>

                <h3 className="project-title">My Portfolio Website</h3>

                <p className="project-category">Web development</p>

              </a>
            </li>

            <li className="project-item  active" data-filter-item data-category="web development">
              <a href="https://gecaboyshostel.000webhostapp.com/">

                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src="./assets/images/project-2.png" alt="finance" loading="lazy"/>
                </figure>

                <h3 className="project-title">Hostel Management System</h3>

                <p className="project-category">Web development</p>

              </a>
            </li>

            <li className="project-item  active" data-filter-item data-category="java">
              <a href="#">

                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src="./assets/images/project-3.png" alt="finance" loading="lazy"/>
                </figure>

                <h3 className="project-title">Snake Game</h3>

                <p className="project-category">Java</p>

              </a>
            </li>
         <li className="project-item  active" data-filter-item data-category="java">
              <a href="#">

                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src="./assets/images/project-3.png" alt="finance" loading="lazy"/>
                </figure>

                <h3 className="project-title">CRUD Application</h3>

                <p className="project-category">Java</p>

              </a>
            </li> 
        

            <li className="project-item  active" data-filter-item data-category="python">
              <a href="#">

                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src="./assets/images/project-4.jpg" alt="finance" loading="lazy"/>
                </figure>

                <h3 className="project-title">Automated Trading System</h3>

                <p className="project-category">python</p>

              </a>
            </li>

            <li className="project-item  active" data-filter-item data-category="machine learning">
              <a href="#">

                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src="./assets/images/project-5.png" alt="finance" loading="lazy"/>
                </figure>

                <h3 className="project-title">House Price Pridiction</h3>

                <p className="project-category">Machine Learning</p>

              </a>
            </li> 



          </ul>

        </div>

      </div>
  )
}

export default Projects

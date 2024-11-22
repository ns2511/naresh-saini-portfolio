import React from 'react'

const Resume = () => {
  return (
    <article className="resume" data-page="resume">

    <header>
      <h2 className="h2 article-title">Resume</h2>
    </header>

    <section className="timeline">

      <div className="title-wrapper">
        <div className="icon-box">
          <ion-icon name="book-outline"></ion-icon>
        </div>

        <h3 className="h3">Education</h3>
      </div>

      <ol className="timeline-list">

        <li className="timeline-item">

          <h4 className="h4 timeline-item-title">Govt. Engineering College, Ajmer</h4>

          <span>7.7/10.0 cgpa</span>

          <p className="timeline-text">
            I'm pursuing B.Tech. from Govt. Engineering College Ajmer in the field of Computer Science and
            Engineering with an agregate cgpa of 7.7/10.0
          </p>
          <p className="timeline-text">
            Expected Graduation: May 2023
          </p>

        </li>

        <li className="timeline-item">

          <h4 className="h4 timeline-item-title">N.K. Public Sr. Sec. School, Murlipura Jaipur</h4>

          <span>82.80%</span>

          <p className="timeline-text">
            I completed my senior school in the field of physics, chemistry and Mathematics from Nkps Murlipura
            Jaipur
            with precentage of 93% in 11th and 82.80% in 12th
          </p>

        </li>

        <li className="timeline-item">

          <h4 className="h4 timeline-item-title">Tagore Plus Sec. School, jaipur</h4>

          <span>83%</span>

          <p className="timeline-text">
            I completed my junior School from TPS school jaipur with precentage of 83% in 10th std.
          </p>

        </li>

      </ol>

    </section>

    <section className="timeline">

      <div className="title-wrapper">
        <div className="icon-box">
          <ion-icon name="book-outline"></ion-icon>
        </div>

        <h3 className="h3">Trainings</h3>
      </div>

      <ol className="timeline-list">

        <li className="timeline-item">

          <h4 className="h4 timeline-item-title">Machine Learning</h4>

          <span>June 2022 — Jul 2022</span>

          <p className="timeline-text">
            Internshala Trainings, Online
          </p>

        </li>
        <li className="timeline-item">

          <h4 className="h4 timeline-item-title">Automated Trading System using Python</h4>

          <span>Jul 2022 — Aug 2022</span>

          <p className="timeline-text">
            Compucom Software Limited, in Office
          </p>

        </li>

        <li className="timeline-item">

          <h4 className="h4 timeline-item-title">HTML, CSS, And Javascript For Web Developers</h4>

          <span>May 2021 — Jul 2021</span>

          <p className="timeline-text">
            Coursera, Online
          </p>

        </li>

        <li className="timeline-item">

          <h4 className="h4 timeline-item-title">C++ Programming - From Beginner To Beyond
          </h4>

          <span>Nov 2020 - jan 2021</span>

          <p className="timeline-text">
            Udemy, Online
          </p>

        </li>

      </ol>

    </section>

    

    <div className="resume-btn-gap"></div>
    <button id="download-resume-btn" className="download-btn" type="submit">
      <ion-icon name="download-outline"></ion-icon>
      <span>Download Resume</span>
    </button>
  </article>
  )
}

export default Resume

import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageUrl("about/about.png")}
          alt="Me sitting with laptop"
        />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/Frontend.png")}
              alt="Frontend developer"
            />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a Frontend Developer with experience in building responsive
                web applications using React.js and .NET. I focus on creating
                clean, user-friendly interfaces that deliver great user
                experiences.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/Backend.png")}
              alt="Backend developer"
            />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I'm a Backend Developer with experience in building robust APIs
                and scalable server-side applications using .NET, Web API, and
                SQL Server. I focus on clean architecture, performance, and
                secure data handling.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

"use client";
import styles from "./home.module.css";
import Navbar from "../navbar/page";
import Footer from '../footer/page'

const Home = () => {
  return (
    <div className={styles["home-page"]}>
      <Navbar />

      <section className={styles["hero"]}>

        <div
          className={`${styles["glow"]} ${styles["glow-1"]}`}
        ></div>

        <div
          className={`${styles["glow"]} ${styles["glow-2"]}`}
        ></div>

        <div
          className={`${styles["glow"]} ${styles["glow-3"]}`}
        ></div>


        <div
          className={`${styles["skill-card"]} ${styles["skill-card-left"]}`}
        >
          <span>🎸</span>

          <div>
            <strong>Guitar</strong>
            <small>Can teach</small>
          </div>
        </div>


        <div
          className={`${styles["skill-card"]} ${styles["skill-card-right"]}`}
        >
          <span>💻</span>

          <div>
            <strong>React JS</strong>
            <small>Wants to learn</small>
          </div>
        </div>


        <div
          className={`${styles["skill-card"]} ${styles["skill-card-bottom"]}`}
        >
          <span>🎨</span>

          <div>
            <strong>UI Design</strong>
            <small>Skill exchange</small>
          </div>
        </div>


        <div className={styles["hero-content"]}>

          <div className={styles["hero-tag"]}>
            ✦ Skill Exchange Community
          </div>


          <h1>
            Exchange Skills,
            <span>Build Connections</span>
          </h1>


          <p>
            Share what you know. Learn what you love. Find people who can
            teach you the skills you have always wanted to learn.
          </p>


          <div className={styles["hero-buttons"]}>

            <button className={styles["primary-btn"]}>
              Find My Match
              <span>→</span>
            </button>

            <button className={styles["secondary-btn"]}>
              Explore Skills
            </button>

          </div>


          <div className={styles["hero-stats"]}>

            <div>
              <strong>10K+</strong>
              <span>Skills</span>
            </div>

            <div>
              <strong>5K+</strong>
              <span>Members</span>
            </div>

            <div>
              <strong>2K+</strong>
              <span>Exchanges</span>
            </div>

          </div>

        </div>

      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;

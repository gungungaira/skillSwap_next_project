"use client";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import styles from "./welcome.module.css";

const WelcomeBanner = () => {
  const router = useRouter();

  return (
    <section className={styles["welcome-section"]}>
      <div className={clsx(styles["welcome-glow"], styles["welcome-glow-one"])}></div>
      <div className={clsx(styles["welcome-glow"], styles["welcome-glow-two"])}></div>

      <div className={styles["welcome-container"]}>
        <div className={styles["welcome-content"]}>
          <div className={styles["welcome-badge"]}>
            <span>✦</span>
            Welcome to SkillSwap
          </div>

          <h1>
            Your profile is ready,
            <br />
            {"let's"} start <span>exchanging!</span>
          </h1>

          <p>
            {"You're"} all set! Discover people, exchange your skills and learn
            something new from the community.
          </p>

          <div className={styles["welcome-actions"]}>
            <button
              className={styles["welcome-primary"]}
              onClick={() => router.push("/findMatch")}
            >
              Find My Match
              <span>→</span>
            </button>

            <button
              className={styles["welcome-secondary"]}
              onClick={() => router.push("/skills")}
            >
              Explore Skills
              <span>↗</span>
            </button>
          </div>
        </div>

        <div className={styles["welcome-visual"]}>
          <div className={clsx(styles["orbit"], styles["orbit-one"])}></div>
          <div className={clsx(styles["orbit"], styles["orbit-two"])}></div>

          <div className={styles["welcome-center"]}>
            <div className={styles["center-icon"]}>✦</div>
            <strong>Skill</strong>
            <span>Exchange</span>
          </div>

          <div className={clsx(styles["floating-skill"], styles["skill-one"])}>
            <div className={styles["skill-icon"]}>💻</div>
            <div>
              <strong>Programming</strong>
              <small>Teach</small>
            </div>
          </div>

          <div className={clsx(styles["floating-skill"], styles["skill-two"])}>
            <div className={styles["skill-icon"]}>🎨</div>
            <div>
              <strong>UI Design</strong>
              <small>Learn</small>
            </div>
          </div>

          <div className={clsx(styles["floating-skill"], styles["skill-three"])}>
            <div className={styles["skill-icon"]}>🎸</div>
            <div>
              <strong>Guitar</strong>
              <small>Exchange</small>
            </div>
          </div>

          <div className={clsx(styles["floating-skill"], styles["skill-four"])}>
            <div className={styles["skill-icon"]}>🗣️</div>
            <div>
              <strong>Communication</strong>
              <small>Learn</small>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["quick-actions"]}>
        <div
          className={styles["quick-card"]}
          onClick={() => router.push("/find-match")}
        >
          <div className={clsx(styles["quick-icon"], styles["purple"])}>👥</div>
          <div className={styles["quick-text"]}>
            <h3>Find Your Match</h3>
            <p>Discover people with matching skills.</p>
          </div>
          <span className={styles["quick-arrow"]}>→</span>
        </div>

        <div
          className={styles["quick-card"]}
          onClick={() => router.push("/skills")}
        >
          <div className={clsx(styles["quick-icon"], styles["blue"])}>◈</div>
          <div className={styles["quick-text"]}>
            <h3>Explore Skills</h3>
            <p>Discover skills you want to learn.</p>
          </div>
          <span className={styles["quick-arrow"]}>→</span>
        </div>

        <div
          className={styles["quick-card"]}
          onClick={() => router.push("/requests")}
        >
          <div className={clsx(styles["quick-icon"], styles["green"])}>💬</div>
          <div className={styles["quick-text"]}>
            <h3>Your Requests</h3>
            <p>Check your exchange requests.</p>
          </div>
          <span className={styles["quick-arrow"]}>→</span>
        </div>

        <div
          className={styles["quick-card"]}
          onClick={() => router.push("/profile")}
        >
          <div className={clsx(styles["quick-icon"], styles["orange"])}>👤</div>
          <div className={styles["quick-text"]}>
            <h3>Edit Profile</h3>
            <p>Update your skills anytime.</p>
          </div>
          <span className={styles["quick-arrow"]}>→</span>
        </div>
      </div>

      <div className={styles["welcome-tip"]}>
        <span>✦</span>
        <strong>Tip:</strong>
        The more skills you share, the better your matches will be!
      </div>
    </section>
  );
};

export default WelcomeBanner;
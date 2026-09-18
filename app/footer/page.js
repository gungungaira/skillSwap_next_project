// footer.module.css
"use client";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer-glow footer-glow-1"]}></div>
      <div className={styles["footer-glow footer-glow-2"]}></div>

      <div className={styles["footer-container"]}>
        <div className={styles["footer-brand"]}>
          <div className={styles["footer-logo"]}>
            <span>✦</span> SkillSwap
          </div>

          <p>
            Exchange what you know.
            <br />
            Learn what inspires you.
          </p>

          <div className={styles["footer-status"]}>
            <span className={styles["status-dot"]}></span>
            Community is active
          </div>
        </div>

        {/* Platform */}
        <div className={styles["footer-column"]}>
          <h3>Platform</h3>

          <a href="#skills">Explore Skills</a>
          <a href="#matches">Find a Match</a>
          <a href="#community">Community</a>
          <a href="#how-it-works">How It Works</a>
        </div>

        {/* Community */}
        <div className={styles["footer-column"]}>
          <h3>Community</h3>

          <a href="#members">Members</a>
          <a href="#exchanges">Skill Exchanges</a>
          <a href="#success">Success Stories</a>
          <a href="#events">Events</a>
        </div>

        {/* Support */}
        <div className={styles["footer-column"]}>
          <h3>Support</h3>

          <a href="#help">Help Center</a>
          <a href="https://www.linkedin.com/in/gunjan-gaira-371ba1213/?isSelfProfile=false">
            Contact Us
          </a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms</a>
        </div>
      </div>

      {/* Bottom section */}
      <div className={styles["footer-bottom"]}>
        <p>© 2026 SkillSwap. Built for people who love to learn.</p>

        <div className={styles["footer-socials"]}>
          <a href="#github" aria-label="GitHub">
            ⌘
          </a>
          <a
            href="https://www.linkedin.com/in/gunjan-gaira-371ba1213/?isSelfProfile=false"
            aria-label="LinkedIn"
          >
            in
          </a>
          <a href="#discord" aria-label="Discord">
            ◈
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

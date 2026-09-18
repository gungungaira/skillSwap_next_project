"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./navbar.module.css";
import clsx from "clsx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [profileCreated, setProfileCreated] = useState(false);

  const navigate = useRouter();

  const checkProfile = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      await Promise.resolve(); 
      setProfileCreated(false);
      return;
    }

    try {
      const server = await fetch(
        "https://barter-platform-backend.onrender.com/getMyProfile",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (server.ok) {
        setProfileCreated(true);
      } else {
        setProfileCreated(false);
      }
    } catch (error) {
      console.log("Profile check error:", error);
      setProfileCreated(false);
    }
  };

  useEffect(() => {
    checkProfile();
    const handleProfileCreated = () => {
      setProfileCreated(true);
    };

    window.addEventListener("profileCreated", handleProfileCreated);

    return () => {
      window.removeEventListener("profileCreated", handleProfileCreated);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("profileCreated");

    setProfileCreated(false);
    setProfileOpen(false);

    navigate("/");
  };

  return (
    <nav className={styles["navbar"]}>
      <div className={styles["navbar-logo"]}>
        <Link href="/home">
          SkillSwap &nbsp;<span>{"YOUR BEST's"}</span>
        </Link>
      </div>

      <div className={styles["navbar-search"]}>
        <input type="text" placeholder="Search people or skills..." />

        <button type="button" className={styles["search-button"]}>
          🔍
        </button>
      </div>

      <div className={clsx(styles["navbar-links"], menuOpen && styles.active)}>
        <Link href="/findMatch" className={styles["find-match"]}>
          Find Match
        </Link>

        <Link href="/inbox" className={styles["message-link"]}>
          Messages
          <span className={styles["message-badge"]}></span>
        </Link>

        <Link href="/requests" className={styles["message-link"]}>
          Requests
          <span className={styles["message-badge"]}></span>
        </Link>
        {!profileCreated && (
          <div>
            <Link href="/createProfile">Create Profile</Link>
          </div>
        )}
        {profileCreated && (
          <div className={styles["profile-container"]}>
            <button
              type="button"
              className={styles["profile-button"]}
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <div className={styles["profile-avatar"]}>G</div>

              <span>Profile</span>

              <span className={styles["arrow"]}>{profileOpen ? "▲" : "▼"}</span>
            </button>

            {profileOpen && (
              <div className={clsx(styles["profile-dropdown"])}>
                <Link href="/profile" onClick={() => setProfileOpen(false)}>
                  My Profile
                </Link>

                <Link href="/mySkill" onClick={() => setProfileOpen(false)}>
                  My Skills
                </Link>

                <Link href="/requests" onClick={() => setProfileOpen(false)}>
                  My Requests
                </Link>

                <Link href="/friends" onClick={() => setProfileOpen(false)}>
                  Your Connection
                </Link>

                <hr />

                <button
                  type="button"
                  className={styles["logout-button"]}
                  onClick={handleLogout}
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <button
        type="button"
        className={styles["mobile-menu"]}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
